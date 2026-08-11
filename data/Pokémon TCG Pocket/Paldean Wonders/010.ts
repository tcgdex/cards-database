import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		fr: "Virovent",
		en: "Bramblin",
		es: "Bramblin",
		it: "Bramblin",
		pt: "Bramblin",
		de: "Weherba"
  },
  illustrator: "Miki Tanaka",
  rarity: "One Diamond",
  category: "Pokemon",
  hp: 50,
  types: ["Grass"],
  dexId: [946],
  description: {
    en: "Not even Bramblin knows where it is headed as it tumbles across the wilderness, blown by the wind. It loathes getting wet.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
			  en: "Rollout",
        fr: "Roulade",
        de: "Walzer",
        it: "Rotolamento",
        es: "Rodar",
        pt: "Rolagem",
        'es-mx': "Rodada"
      },
      damage: "20",
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