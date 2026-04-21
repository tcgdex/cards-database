import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		fr: "Dofin",
		en: "Finizen",
		es: "Finizen",
		it: "Finizen",
		pt: "Finizen",
		de: "Normifin"
  },
  illustrator: "kodama",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 60,
  types: ["Water"],
  dexId: [963],
  description: {
    en: "Its water ring is made from seawater mixed with a sticky fluid that Finizen secretes from its blowhole.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Razor Fin",
        fr: "Aileron-Rasoir",
        es: "Aleta Afilada",
        it: "Pinnalama",
        de: "Rasierflosse",
        'pt-br': "Barbatana Cortante",
        ko: "지느러미 커터"
      },
      damage: "20",
      cost: ["Water"],
    },
  ],
  weaknesses: [
    {
      type: "Lightning",
      value: "+20",
    },
  ],
  retreat: 1,
};

export default card;