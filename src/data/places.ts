import {assets} from '../theme/assets';
import type {Place, PlaceCategory} from '../types/app';

export const categoryLabels: Record<PlaceCategory, string> = {
  pyramids: 'Pyramids',
  museums: 'Museums',
  ruins: 'Ruins',
};

export const places: Place[] = [
  {
    id: 'great-pyramid-giza',
    title: 'Great Pyramid of Giza',
    category: 'pyramids',
    coordinates: '29.9792, 31.1342',
    latitude: 29.9792,
    longitude: 31.1342,
    image: assets.greatPyramid,
    description:
      'The most famous pyramid in the world is located on the Giza Plateau near Cairo and is considered one of the greatest architectural achievements of mankind. It was built around 2560 BC as the tomb of Pharaoh Khufu. The height of the structure once exceeded 146 meters, and the stone blocks from which it is made weigh several tons each. Even today, researchers argue about the exact construction methods, because such a precise arrangement of the blocks looks incredible for its time. Around the pyramid reigns a special desert atmosphere: hot air, golden sand and silence create a feeling of traveling to another era. Inside there are narrow passages and ancient chambers that have attracted the attention of archaeologists for centuries. In the evening, the territory takes on a completely different look - warm lighting makes the pyramid look like a huge luminous monument in the middle of the dark desert.',
  },
  {
    id: 'pyramid-khafre',
    title: 'Pyramid of Khafre',
    category: 'pyramids',
    coordinates: '29.9761, 31.1307',
    latitude: 29.9761,
    longitude: 31.1307,
    image: assets.pyramidKhafre,
    description:
      'The Pyramid of Khafre is the second largest on the Giza Plateau, but due to its location on a higher terrain, it often seems even larger than the Great Pyramid. It is near this complex that the famous Great Sphinx is located. The upper part of the pyramid still retains fragments of the smooth cladding that once covered almost all similar structures in Ancient Egypt. The architecture of this place looks strict and monumental, and the space around it creates the impression of a real ancient city in the middle of the desert. Tourists often note a special atmosphere at dawn, when the sun gradually illuminates the stone surfaces with a warm golden color. The internal passages here are simpler than in the Great Pyramid, but this allows you to better feel the scale of the structure and its massiveness. Today, this pyramid remains one of the most recognizable symbols of Egypt and a major point for those who want to see real architecture from the era of the pharaohs.',
  },
  {
    id: 'pyramid-menkaure',
    title: 'Pyramid of Menkaure',
    category: 'pyramids',
    coordinates: '29.9723, 31.1284',
    latitude: 29.9723,
    longitude: 31.1284,
    image: assets.pyramidMenkaure,
    description:
      'The Pyramid of Menkaure is the smallest of the three main pyramids of Giza, but it is distinguished by its more detailed stonework and unusual atmosphere. Part of the lower blocks is made of red granite, which gives the structure a special look in the sunlight. Unlike the giant neighboring pyramids, this one seems more human in scale, so you can better feel the texture of the ancient stone and the details of the structure near it. Archaeologists believe that the complex around the pyramid was an important part of the funeral rituals of Pharaoh Menkaure. Stone sarcophagi and ritual objects were found inside, many of which are now stored in museums. Due to the fewer tourists, this place often looks calmer and more atmospheric, especially closer to the evening. The pyramid is great for those who want to not just see a popular attraction, but also experience a quieter and more mysterious side of ancient Egypt.',
  },
  {
    id: 'bent-pyramid',
    title: 'Bent Pyramid',
    category: 'pyramids',
    coordinates: '29.7903, 31.2094',
    latitude: 29.7903,
    longitude: 31.2094,
    image: assets.bentPyramid,
    description:
      'The Bent Pyramid in Dahshur is one of the most interesting architectural structures in Egypt due to its unusual shape. Its sides have different angles of inclination, which is why the structure looks bent. Historians believe that during construction, the architects changed the original plan due to problems with the stability of the structure. It is this feature that made the pyramid unique and very important for the history of the development of Egyptian architecture. The place is located far from the main tourist routes, so the atmosphere here is much calmer than in Giza. The desert around looks almost untouched, and the pyramid itself looks especially impressive in the soft evening light. Inside you can see narrow passages, high chambers and complex internal structures. For many travelers, this place becomes one of the most unexpected discoveries during a trip to Egypt.',
  },
  {
    id: 'red-pyramid',
    title: 'Red Pyramid',
    category: 'pyramids',
    coordinates: '29.8086, 31.2058',
    latitude: 29.8086,
    longitude: 31.2058,
    image: assets.redPyramid,
    description:
      'The Red Pyramid got its name because of the shade of the stone, which acquires a rich reddish color at sunset. It is considered the first real pyramid with regular smooth sides and became an important stage in the development of Egyptian engineering. The structure is located in Dahshur, far from the noisy Cairo, so there is a special silence here. The entrance inside leads through a long sloping tunnel, which creates a strong feeling of immersion in the ancient world. The internal chambers have high ceilings and complex geometry, which surprises even modern architects. The area around is almost undeveloped, so the pyramid looks very isolated in the desert landscape. This place is great for those who want to see a less touristy, but very authentic Egypt.',
  },
  {
    id: 'pyramid-djoser',
    title: 'Pyramid of Djoser',
    category: 'pyramids',
    coordinates: '29.8713, 31.2165',
    latitude: 29.8713,
    longitude: 31.2165,
    image: assets.pyramidDjoser,
    description:
      'The Step Pyramid of Djoser in Saqqara is considered one of the oldest large stone structures in the world. It was created by the architect Imhotep, who later began to be considered a legendary master of ancient Egypt. Unlike the classic smooth pyramids, this one has the form of several large steps located one above the other. It was here that the evolution of architecture began, which later led to the creation of the pyramids of Giza. The complex around the structure includes ancient courtyards, temples and stone passages, which create the feeling of a real lost city. Many tourists call this place one of the most atmospheric in Egypt due to the smaller number of people and the scale of the territory. The sunlight beautifully emphasizes the texture of the ancient stone, and the narrow passages between the structures allow you to literally feel the breath of history.',
  },
  {
    id: 'pyramid-unas',
    title: 'Pyramid of Unas',
    category: 'pyramids',
    coordinates: '29.8674, 31.2158',
    latitude: 29.8674,
    longitude: 31.2158,
    image: assets.pyramidUnas,
    description:
      'The Pyramid of Unas looks much more modest than the other great pyramids of Egypt, but its main value is hidden inside. It was here that archaeologists first found the famous Pyramid Texts - ancient religious inscriptions carved on the walls of the inner chambers. These texts are considered some of the oldest religious records in the world. The inner corridors are decorated with symbols and hieroglyphs, which create an incredible atmosphere and give an idea of the Egyptians ideas about the afterlife. The exterior of the structure is partially destroyed by time, but this is what gives the place a special historical character. The complex is located in Saqqara, among a large number of other ancient structures, so a walk through this area resembles exploring an archaeological labyrinth in the open air.',
  },
  {
    id: 'egyptian-museum-cairo',
    title: 'Egyptian Museum Cairo',
    category: 'museums',
    coordinates: '30.0478, 31.2336',
    latitude: 30.0478,
    longitude: 31.2336,
    image: assets.egyptianMuseum,
    description:
      'The Egyptian Museum in Cairo is considered one of the most famous museums of ancient history in the world. Its huge collection contains thousands of artifacts, including sarcophagi, gold jewelry, statues of pharaohs and household items, which are over several thousand years old. It was here that the famous treasures of Tutankhamun were stored for a long time, which made the museum a cult place for travelers and archaeologists. Inside the building, the atmosphere of a real historical expedition reigns: high halls, massive statues and ancient symbols create a feeling of immersion in the times of the pharaohs. Of particular interest are the mummies of the rulers of Egypt, which have been preserved in incredible condition. The museum is located in the very center of Cairo, so the contrast between the modern metropolis and ancient history is constantly felt around. For many tourists, this place becomes the main point of acquaintance with the culture of Ancient Egypt.',
  },
  {
    id: 'grand-egyptian-museum',
    title: 'Grand Egyptian Museum',
    category: 'museums',
    coordinates: '29.9996, 31.1197',
    latitude: 29.9996,
    longitude: 31.1197,
    image: assets.grandEgyptianMuseum,
    description:
      'The Grand Egyptian Museum is one of the largest modern museum complexes in the world, built near the pyramids of Giza. Its architecture combines modern minimalism with elements of the ancient style, creating the impression of a huge stone palace in the middle of the desert. The museum space was designed so that visitors gradually immersed in the history of Egypt through large thematic galleries and panoramic passages. Inside there are thousands of exhibits, including huge statues of Ramses II, ancient scrolls and ritual objects. The wide halls with soft golden lighting and a view of the pyramids through panoramic windows look especially impressive. The museum was created as a new symbol of Egypts cultural heritage and immediately became one of the most famous architectural objects of the country. This place combines history, design and modern technology in one space.',
  },
  {
    id: 'luxor-museum',
    title: 'Luxor Museum',
    category: 'museums',
    coordinates: '25.6996, 32.6396',
    latitude: 25.6996,
    longitude: 32.6396,
    image: assets.luxorMuseum,
    description:
      'Located on the banks of the Nile, the Luxor Museum is known for its peaceful atmosphere and high-quality exhibits. Unlike the huge, crowded museums, each exhibit here receives more space and attention. Inside, you can see ancient statues, jewelry, stone slabs with hieroglyphs, and objects found in the temples of Luxor and Karnak. The lighting is designed to emphasize the textures of the stone and gold, which makes the exhibition look almost cinematic. Of particular interest are the artifacts of the New Kingdom, as well as reconstructed scenes from the lives of ancient rulers. In the evening, the museum building is beautifully illuminated, and a walk along the Nile after the visit creates a very atmospheric end to the day. This place is great for those who like a quiet study of history without the big noise of tourist groups.',
  },
  {
    id: 'nubian-museum',
    title: 'Nubian Museum',
    category: 'museums',
    coordinates: '24.0889, 32.8998',
    latitude: 24.0889,
    longitude: 32.8998,
    image: assets.nubianMuseum,
    description:
      'The Nubian Museum in Aswan is dedicated to the culture and history of Nubia, a region that has had close ties to Egypt for centuries. The architecture of the museum blends harmoniously with the desert landscape: stone walls, warm colors and natural lighting create a very peaceful atmosphere. The exhibition includes ancient statues, ceramics, jewelry and objects of everyday life of the Nubian peoples. Special attention is paid to the history of the resettlement of residents after the construction of the Aswan Dam. The area around the museum is designed as an archaeological park with palm trees and ancient fragments of structures. Many travelers note that this place allows you to see Egypt from a different perspective - not only through the pyramids and pharaohs, but through the culture of the people who lived along the Nile for millennia.',
  },
  {
    id: 'islamic-art-museum-cairo',
    title: 'Museum of Islamic Art Cairo',
    category: 'museums',
    coordinates: '30.0444, 31.2553',
    latitude: 30.0444,
    longitude: 31.2553,
    image: assets.islamicArtMuseum,
    description:
      'The Museum of Islamic Art in Cairo is one of the largest museums of its kind in the world. Its collection includes ancient manuscripts, ceramics, wood carvings, textiles, and decorative objects from different eras of Islamic history. The museum building itself looks like an architectural work of art: arches, ornaments, and warm colors create a very elegant space. Inside, there is a calm atmosphere, and the exhibits demonstrate the incredible attention to detail characteristic of Middle Eastern art. Of particular interest are ancient astronomical instruments and calligraphy, which looks almost like a separate art form. This place helps to better understand the cultural diversity of Egypt and its historical connection with different civilizations.',
  },
  {
    id: 'national-museum-civilization',
    title: 'National Museum of Egyptian Civilization',
    category: 'museums',
    coordinates: '30.0187, 31.2470',
    latitude: 30.0187,
    longitude: 31.247,
    image: assets.nationalMuseum,
    description:
      'The National Museum of Egyptian Civilization in Cairo is one of the most modern museums in Egypt. It presents the history of Egyptian civilization from ancient times to the modern era through statues, jewelry, manuscripts, royal artifacts, and historical exhibits. One of the most famous areas is the Royal Mummies Hall, where several ancient pharaohs are displayed in a dramatic underground space with cinematic lighting. The museum combines modern architecture with warm sandstone materials and elegant interiors inspired by ancient Egypt. Large open halls, soft golden lighting, and immersive gallery design create a calm luxury atmosphere for visitors. This museum is considered one of the most important cultural destinations in Cairo for travelers who want to explore both ancient history and modern Egyptian design.',
  },
  {
    id: 'coptic-museum',
    title: 'Coptic Museum',
    category: 'museums',
    coordinates: '30.0062, 31.2303',
    latitude: 30.0062,
    longitude: 31.2303,
    image: assets.copticMuseum,
    description:
      'The Coptic Museum in Old Cairo is dedicated to the Christian history of Egypt and the culture of the Coptic people. Its collection includes ancient manuscripts, icons, wood panels and textiles spanning many centuries of history. The museum building combines elements of traditional Middle Eastern architecture and ancient church motifs. Inside, there is a very quiet and peaceful atmosphere, which contrasts sharply with the noise of the modern city outside the complex. Of particular interest are the ancient biblical texts and hand-carved wood carvings made many centuries ago. The area around the museum includes narrow old streets, small churches and courtyards, which create the feeling of a hidden historical district in the middle of a metropolis.',
  },
  {
    id: 'karnak-ruins',
    title: 'Karnak Ruins',
    category: 'ruins',
    coordinates: '25.7188, 32.6573',
    latitude: 25.7188,
    longitude: 32.6573,
    image: assets.karnakRuins,
    description:
      'The ruins of Karnak are one of the largest ancient temple complexes in the world. This place was built over many centuries by various pharaohs, so today the area resembles a huge stone city with columns, statues and the remains of temples. The most famous part of the complex is the Great Hypostyle Hall with massive columns that are covered with ancient symbols and hieroglyphs. When sunlight passes between them, the space looks almost unreal. Here you can see the remains of ancient passages, sacred lakes and fragments of walls that have survived for more than three thousand years. In the evening, the area is especially atmospheric due to the warm lighting of the stone. Karnak creates a feeling of a lost world, where each corridor or column hides a part of the history of ancient Egypt. This place is impressive not only in scale, but also in detail, which can be viewed for hours.',
  },
  {
    id: 'abu-simbel-ruins',
    title: 'Abu Simbel Ruins',
    category: 'ruins',
    coordinates: '22.3372, 31.6258',
    latitude: 22.3372,
    longitude: 31.6258,
    image: assets.abuSimbelRuins,
    description:
      'The ruins of Abu Simbel are located near Lake Nasser and are considered one of the greatest architectural monuments in Egypt. The main feature of the complex is the huge stone statues of Ramses II, carved directly into the rock. Despite the fact that the structures are well preserved, the area around still creates the atmosphere of ancient ruins in the desert landscape. The complex was moved to a higher place due to the construction of the Aswan Dam, and this operation is considered one of the largest archaeological projects of the 20th century. Inside the temples are long stone corridors and halls with detailed carvings. At dawn, the sun illuminates the facade of the statues with a warm golden color, which makes the place look especially majestic. The ruins of Abu Simbel combine the power of nature and human architecture in one space.',
  },
  {
    id: 'temple-edfu-ruins',
    title: 'Temple of Edfu Ruins',
    category: 'ruins',
    coordinates: '24.9779, 32.8740',
    latitude: 24.9779,
    longitude: 32.874,
    image: assets.edfuRuins,
    description:
      'The ruins of the Temple of Edfu are dedicated to the god Horus and are one of the best-preserved temple complexes in Egypt. The huge stone walls are covered with hieroglyphs and scenes from ancient legends, which still remain very detailed. The entrance to the temple is through massive gates, which create a strong sense of scale even before you get inside. The territory of the complex looks like an ancient fortress in the middle of the desert, and the high walls add to the mysterious atmosphere of the place. Inside are spacious courtyards, dark chambers and ritual halls, where ceremonies were once held. Many tourists note that this is where you can best imagine what the temples of Egypt looked like in ancient times. The sunlight beautifully emphasizes the texture of the stone and makes the symbols on the walls even more noticeable.',
  },
  {
    id: 'kom-ombo-ruins',
    title: 'Kom Ombo Ruins',
    category: 'ruins',
    coordinates: '24.4522, 32.9280',
    latitude: 24.4522,
    longitude: 32.928,
    image: assets.komOmboRuins,
    description:
      'The ruins of Kom Ombo are located right next to the Nile and have an unusual symmetrical structure. The temple was dedicated to two gods at once, so its architecture is divided into two almost identical parts. Today you can see the remains of columns, stone halls and walls with very well-preserved carvings. Of particular interest are the ancient medical symbols and scenes, which are considered to be some of the first images of medical instruments in the world. In the evening, the ruins are beautifully lit and create a very atmospheric view against the background of the dark Nile. Thanks to the open space and proximity to the water, this place is different from other desert complexes in Egypt. Kom Ombo is often called one of the most photogenic archaeological sites in the country.',
  },
  {
    id: 'philae-ruins',
    title: 'Philae Ruins',
    category: 'ruins',
    coordinates: '24.0258, 32.8840',
    latitude: 24.0258,
    longitude: 32.884,
    image: assets.philaeRuins,
    description:
      'The Philae Ruins are located on an island in the middle of the Nile and look almost like a lost stone palace in the middle of the water. You can get here by boat, which in itself creates a special atmosphere of the trip. The complex is dedicated to the goddess Isis and consists of colonnaded courtyards, arches and temple passages. The light stone beautifully reflects the sunlight, and the surrounding water gives the place a feeling of isolation from the modern world. In the evening, the backlight makes the ruins even more spectacular, especially when the light reflects off the water of the Nile. Many travelers call Philae one of the most romantic places in Egypt due to the combination of nature and ancient architecture. It is easy to feel the peace and atmosphere of an ancient civilization here.',
  },
  {
    id: 'abydos-ruins',
    title: 'Abydos Ruins',
    category: 'ruins',
    coordinates: '26.1849, 31.9207',
    latitude: 26.1849,
    longitude: 31.9207,
    image: assets.abydosRuins,
    description:
      'The ruins of Abydos are one of the oldest religious centers in Egypt. It is here that the Temple of Seti I is located, known for its detailed reliefs and well-preserved colored elements. Many researchers consider this place one of the most valuable archaeological complexes in the country due to the huge number of historical inscriptions. The ruins look less touristy than the popular sites of Giza or Luxor, so the atmosphere here is more calm and mysterious. Inside the temples you can see long corridors, tall columns and ceilings with the remains of ancient paintings. The desert landscape around only enhances the feeling of isolation and antiquity of this place. Abydos is great for those who want to see a more authentic and less commercial side of Egypt.',
  },
  {
    id: 'tanis-ruins',
    title: 'Tanis Ruins',
    category: 'ruins',
    coordinates: '30.9638, 31.8723',
    latitude: 30.9638,
    longitude: 31.8723,
    image: assets.tanisRuins,
    description:
      'The ruins of Tanis are located in the northern part of Egypt and are very different from the classic desert archaeological sites. Here, among the green plains and a humid climate, there are the remains of an ancient city with massive stone blocks, statues and fragments of columns. Once Tanis was an important political and religious center, but over time the city gradually declined. Today the area looks very atmospheric due to the combination of nature and ancient ruins, which are partially covered with grass and sand. Due to its less popularity among tourists, this place often looks almost deserted, which adds to its special mystery. Many archaeologists compare Tanis to a lost city, because new artifacts and fragments of ancient structures are still being found here.',
  },
];

export const getPlaceById = (id: string) =>
  places.find(place => place.id === id);
