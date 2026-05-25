import {assets} from '../theme/assets';
import type {Article} from '../types/app';

export const articles: Article[] = [
  {
    id: 'mystery',
    title: 'Why Ancient Egypt Still Feels Mysterious',
    image: assets.articleMystery,
    text:
      'Even after thousands of years, ancient Egypt remains one of the most mysterious civilizations in the world. People are still amazed by the huge pyramids, complex underground passages and temples built with incredible precision. Many archaeologists believe that some of the knowledge and technology of that time is still not fully understood by modern science. That is why Egypt constantly attracts the attention of researchers, travelers and photographers.\n\nA special atmosphere is created by the combination of desert, warm sun and ancient stone. When a person first sees the pyramids or walks between the huge columns of Karnak, it feels as if time has stopped. Even modern cities in Egypt often preserve historical districts, where you can see narrow streets, old markets and buildings with elements of ancient culture.\n\nAnother reason for the popularity of Egypt is the huge number of legends. Stories about lost treasures, hidden rooms and ancient symbols create a special mystical image around the country. It is this balance between real history and mystery that makes Egypt so unforgettable for travelers.',
  },
  {
    id: 'nile',
    title: 'Hidden Beauty of the Nile River',
    image: assets.articleNile,
    text:
      'The Nile has been the heart of Egypt for millennia. It was near this river that ancient cities, temples and trade routes arose. Even today, the life of many regions of the country is connected with the water of the Nile. The contrast between the blue river and the golden deserts creates unique landscapes that are difficult to see anywhere else in the world.\n\nA trip along the Nile allows you to see a completely different Egypt. There are green palm-lined banks, small fishing boats and ancient ruins that appear right next to the water. Evenings are considered especially atmospheric, when the sun sets over the horizon and illuminates the water with a warm orange light.\n\nMany temples and cities were specially built next to the Nile for ease of transportation. In ancient times, the river was the main road of the country, so it was used to transport stones for the pyramids, products and even large statues. Today, a trip along the Nile has become a popular part of the travel experience for tourists.',
  },
  {
    id: 'temples',
    title: 'The Atmosphere of Ancient Temples',
    image: assets.articleTemples,
    text:
      'Ancient Egyptian temples are impressive not only in scale, but also in atmosphere. Many of them were built in such a way that a person gradually moved from bright sunlight to dark inner halls. This created a special feeling of sacred space and enhanced emotions during ceremonies.\n\nThe walls of the temples are covered with thousands of symbols and scenes from the lives of the gods and pharaohs. Some images have remained so detailed that even today you can see individual elements of clothing or jewelry. The temples look especially impressive in the morning or evening, when the sun creates long shadows between the columns.\n\nSome of the most famous temple complexes are Karnak, Luxor and Edfu. Each of them has its own style and atmosphere. Some places look majestic and monumental, others quiet and mysterious. It is this diversity that makes a trip to Egypt so interesting for history and architecture lovers.',
  },
  {
    id: 'desert',
    title: 'Desert Landscapes Around the Pyramids',
    image: assets.articleDesert,
    text:
      'The desert around the pyramids is as important a part of the atmosphere as the ancient structures themselves. The endless sandy expanses create a feeling of isolation from the modern world and help to better imagine what Egypt was like thousands of years ago. That is why many tourists advise visiting the pyramids not only during the day, but also at dawn or sunset.\n\nAt different times of the day, the desert changes its appearance. In the morning, the sand looks light and almost golden, and in the evening it becomes rich orange or even reddish. The wind constantly changes the surface of the dunes, so the landscape never looks the same.\n\nIn addition to the pyramids, in the desert regions you can find ancient ruins, stone passages and forgotten archaeological sites. Some of them are almost completely unvisited by tourists, which creates an even stronger sense of adventure and exploration. It is the desert that makes Egypts architecture so grand and majestic.',
  },
  {
    id: 'symbols',
    title: 'Secrets Behind Egyptian Symbols',
    image: assets.articleSymbols,
    text:
      'Egyptian symbols and hieroglyphs still arouse great interest among people all over the world. Ancient inscriptions were used not only to record texts, but also as part of religious rituals and temple decorations. Each symbol had its own meaning and could denote a word, sound or an entire idea.\n\nSymbols of the sun, birds, snakes and the eye of Horus were especially popular. They can be seen on temple walls, sarcophagi and even jewelry. Many Egyptians believed that some signs had protective powers and brought good luck.\n\nToday, hieroglyphs are an important part of the visual style of Egypt. They are often used in the design of souvenirs, museums and tourist spaces. For travelers, getting acquainted with the symbols becomes a way to better understand the culture and worldview of the ancient civilization.',
  },
  {
    id: 'night',
    title: 'Exploring Egypt at Night',
    image: assets.articleNight,
    text:
      'Egypt looks completely different at night. Many temples, museums and historical complexes have special lighting, which makes the ancient buildings even more atmospheric. The warm light emphasizes the texture of the stone and creates a strong contrast with the dark desert sky.\n\nEvening walks near the pyramids and the Luxor Temple are especially popular. At this time, it gets cooler and the number of people decreases, so the places look more peaceful. Night Egypt creates a feeling of real adventure and exploration of the ancient world.\n\nIn large cities, a different atmosphere also opens up: noisy markets, cafe lights and narrow streets of old districts. The combination of modern life and ancient history makes night Egypt especially interesting for photographers and travel bloggers.',
  },
  {
    id: 'return',
    title: 'Why Travelers Return to Egypt Again',
    image: assets.articleReturn,
    text:
      'Many people return to Egypt more than once. The reason is the great variety of places and atmospheres that cannot be fully explored in one trip. There are huge pyramids, ancient temples, desert routes, museums and cities along the Nile.\n\nEgypt combines history and emotions. Even a simple walk among the ancient columns or a boat trip on the Nile can leave a strong impression. Each region of the country has its own character: Cairo looks noisy and energetic, Luxor - historical, and Aswan - more calm and warm.\n\nFor many tourists, the main feature of Egypt is the atmosphere of mystery. It is easy to feel a connection to the past and imagine what one of the worlds most famous civilizations looked like, which is why Egypt remains one of the most popular destinations for history and adventure lovers.',
  },
];

export const getArticleById = (id: string) =>
  articles.find(article => article.id === id);
