import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
    en: "Tatsugiri",
  },
  illustrator: "OKACHEKE",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 70,
  types: ["Water"],
  dexId: [978],
  description: {
    en: "Tatsugiri is an extremely cunning Pokémon. It feigns weakness to lure in prey, then orders its partner to attack.",
  },
  stage: "Basic",
  attacks: [
    {
      name: {
        en: "Rally Back",
      },
      damage: "20+",
      cost: ["Water"],
      effect: {
        en: "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 60 more damage.",
      },
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