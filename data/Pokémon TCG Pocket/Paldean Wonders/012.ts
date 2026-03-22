import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		fr: "Pimito",
		en: "Capsakid",
		es: "Capsakid",
		it: "Capsakid",
		pt: "Capsakid",
		de: "Chilingel"
  },
  illustrator: "GIDORA",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Grass"],
  dexId: [951],
  description: {
    en: "Traditional Paldean dishes can be extremely spicy because they include the shed front teeth of Capsakid among their ingredients.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Playful Kick",
        fr: "Coup de Pied de Garnement",
        es: "Patada Juguetona",
        'es-mx': "Patada Juguetona",
        de: "Verspielter Kick",
        it: "Calcio Briccone",
        pt: "Chute Brincalhão"
      },
      damage: 10,
      cost: ["Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Fire",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;
