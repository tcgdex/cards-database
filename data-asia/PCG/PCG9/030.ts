import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
                  ja: "ニネタール（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [38],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
                        ja: "ボランティア",
                                                                      },
          effect: {
                        ja: "ターン中（攻撃前）に（攻撃の前）、ニネタールから4つのダメージカウンターを削除し、VulpixからNinetalesを破棄することができます。そうした場合は、デッキをNineTalesまたはNinetales Exを検索し、Vulpixに置いてください（これは進化するVulpixとしてカウントされます）。  その後、デッキをシャッフルします。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "トリックテール",
                                                                      },
          effect: {
                        ja: "廃棄の山を検索して、エネルギーカードを1枚取り付けます。",
                                                                      },
          damage: 30,
        },
      ],


      variants: [
        {
          type: "holo",
          subtype: "unlimited',
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
