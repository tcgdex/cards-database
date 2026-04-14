import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		fr: "Cryodo",
		en: "Arctibax",
		es: "Arctibax",
		it: "Arctibax",
		pt: "Arctibax",
		de: "Cryospino"
  },
  illustrator: "Kouki Saitou",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 90,
  types: ["Water"],
  dexId: [997],
  evolveFrom: {
		fr: "Frigodo",
		en: "Frigibax",
		es: "Frigibax",
		it: "Frigibax",
		pt: "Frigibax",
		de: "Frospino"
  },
  description: {
    en: "It attacks with the blade of its frozen dorsal fin by doing a front flip in the air. Arctibax’s strong back and legs allow it to pull off this technique.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Frost Smash",
        fr: "Impact Glacial",
        es: "Golpe Gélido",
        'es-mx': "Golpazo Gélido",
        de: "Frostschlag",
        it: "Gelocolpo",
        pt: "Pancada Congelada"
      },
      damage: "50",
      cost: ["Water", "Colorless"],
    },
  ],
  weaknesses: [
    {
      type: "Metal",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;