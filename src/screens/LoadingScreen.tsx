import React, {useEffect} from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {assets} from '../theme/assets';

const loaderHtml = `
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      html, body {
        margin: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        overflow: hidden;
      }
      body {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .ring {
        width: 58px;
        height: 58px;
        border-radius: 50%;
        border: 5px solid rgba(255, 255, 255, 0.28);
        border-top-color: #ffffff;
        animation: spin 0.9s linear infinite;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    </style>
  </head>
  <body>
    <div class="ring"></div>
  </body>
</html>`;

export function LoadingScreen({onFinish}: {onFinish: () => void}) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 5000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <ImageBackground
      source={assets.loaderBackground}
      resizeMode="cover"
      style={styles.background}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <View style={styles.webFrame}>
        <WebView
          originWhitelist={['*']}
          source={{html: loaderHtml}}
          scrollEnabled={false}
          style={styles.webView}
          containerStyle={styles.webContainer}
          opaque={false}
          javaScriptEnabled
          setSupportMultipleWindows={false}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8a3a08',
  },
  webFrame: {
    width: 112,
    height: 112,
    borderRadius: 56,
    overflow: 'hidden',
  },
  webView: {
    width: 112,
    height: 112,
    backgroundColor: 'transparent',
  },
  webContainer: {
    backgroundColor: 'transparent',
  },
});
