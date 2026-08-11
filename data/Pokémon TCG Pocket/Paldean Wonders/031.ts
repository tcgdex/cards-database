import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Veluza",
		fr: "Délestin",
		es: "Veluza",
		it: "Veluza",
		pt: "Veluza",
		de: "Agiluza"
  },
  illustrator: "Oswaldo KATO",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 100,
  types: ["Water"],
  dexId: [976],
  description: {
    en: "Veluza has excellent regenerative capabilities. It sheds spare flesh from its body to boost its agility, then charges at its prey.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Shedding Spiral",
      },
      damage: "90",
      cost: ["Water", "Colorless", "Colorless", "Colorless"],
      effect: {
        en: "If you have no cards in your deck, this attack can be used for 1 Water Energy.",
      },
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;
