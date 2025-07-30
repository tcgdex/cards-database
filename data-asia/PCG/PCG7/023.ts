import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
                  ja: "pidgeot（デルタ種）",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [18],
      hp: 100,
      types: ["Lightning"],
      stage: "Stage2",

      abilities: [
        {
          name: {
                        ja: "デルタリザーブ",
                                                                      },
          effect: {
                        ja: "PidgeotにHolon Energy Cardsが接続されている限り、各プレイヤーのPokã©Mon（カードにデルタを持っているPokã©Monを除く）はPokã©Powersを使用できません。",
                                                                      },
      }],

      attacks: [
        {
          cost: ["Lightning", "Metal", "Colorless"],
          name: {
                        ja: "回転爪",
                                                                      },
          effect: {
                        ja: "Pidgeotに取り付けられたエネルギーカードを破棄できます。そうした場合は、廃棄パイルを検索して、エネルギーカード（廃棄したものを除く）を検索し、pidgeotに取り付けます。",
                                                                      },
          damage: 50,
        },
      ],

      retreat: 1,

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
