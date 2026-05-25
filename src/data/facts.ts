import {assets} from '../theme/assets';
import type {Fact} from '../types/app';

const factTexts = [
  'The ancient Egyptians used ink and papyrus long before the advent of modern paper. Many inscriptions on papyrus have survived for thousands of years thanks to the dry climate of Egypt.',
  'The pyramids were originally covered with smooth white stone, which brightly reflected the sun. Because of this, they could be visible for tens of kilometers in the desert.',
  'In ancient Egypt, cats were considered sacred animals. For harming a cat, a person could receive a very serious punishment.',
  'The Nile River was the main source of life for the entire civilization of Egypt. It was thanks to its floods that the lands became fertile in the middle of the desert.',
  'The Egyptians believed that the human soul continues to exist after death. That is why they created complex funeral rituals and built tombs.',
  'Many temples in Egypt were specially located according to the movement of the sun. On certain days, sunlight illuminated specific statues or rooms.',
  'The Great Sphinx of Giza is one of the most mysterious sculptures in the world. It is still not known exactly what it looked like immediately after its creation.',
  'In ancient Egypt, people wore jewelry not only for beauty, but also as a symbol of protection. Amulets with symbols of the gods were especially popular.',
  'Some ancient paints used to paint temples remain bright even today. This surprises archaeologists because of the age of these drawings.',
  'Egyptian architects used very precise mathematical calculations when building the pyramids. Many modern engineers still study these methods.',
  'In ancient Egypt, there were special boats for traveling on the Nile. River routes were the main roads of the country.',
  'Many mummies preserved their hair, fabrics, and even jewelry. This allows researchers to better understand the lives of people at that time.',
  'The ancient Egyptians used mirrors made of polished metal. They looked very unusual compared to modern glass mirrors.',
  'Some tombs contained hidden passages and false doors. This is how architects tried to protect treasures from robbers.',
  'In temples, aromatic oils and incense were often used during ceremonies. Because of this, the interior spaces had a special atmosphere.',
  'Ancient Egypt had its own calendar system. It was based on the cycles of the Nile and the movement of the stars.',
  'Many statues of pharaohs have specially damaged noses. This was often done in ancient times due to religious or political conflicts.',
  'Hieroglyphs were not just text, but a whole system of symbols and drawings. One sign could mean a sound, a word, or even a separate idea.',
  'Some of the stone blocks for the pyramids were transported down the Nile on large boats. This allowed materials to be delivered from very distant regions.',
  'Egyptian temples were built so that the inside became darker with each new hall. This created a special feeling of transition into a sacred space.',
];

export const facts: Fact[] = factTexts.map((text, index) => ({
  id: `fact-${index + 1}`,
  text,
  image: assets.guidePointing,
}));

export const getFactById = (id: string) => facts.find(fact => fact.id === id);
