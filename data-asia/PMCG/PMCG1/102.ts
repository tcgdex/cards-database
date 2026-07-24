import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
  set: Set,
  name: {
    // Fighting Energy
    ja: "基本闘エネルギー",
  },

  illustrator: "Keiji Kinebuchi",
  rarity: "Common",
  category: "Energy",

  variants: [
    {
      type: "normal",
      thirdParty: {
        tcgplayer: 577170
      },
    },
    {
      type: "normal",
      subtype: "no-rarity",
    }
  ],
};

export default card
