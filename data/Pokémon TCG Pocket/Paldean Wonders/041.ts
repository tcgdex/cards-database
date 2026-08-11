import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		fr: "Têtampoule",
		en: "Tadbulb",
		es: "Tadbulb",
		it: "Tadbulb",
		pt: "Tadbulb",
		de: "Blipp"
  },
  illustrator: "Saya Tsuruta",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Lightning"],
  dexId: [938],
  description: {
    en: "It floats using the electricity stored in its body. When thunderclouds are around, Tadbulb will float higher off the ground.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        fr: "Boule Élek",
        en: "Electro Ball",
        es: "Bola Voltio",
        it: "Energisfera",
        pt: "Bola Elétrica",
        de: "Elektroball"
      },
      damage: 20,
      cost: ["Lightning"],
    },
  ],
  weaknesses: [
    {
      type: "Fighting",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;