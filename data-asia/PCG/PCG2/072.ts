import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
                  ja: "Sharpedo ex",
                                                   },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [319],
      hp: 100,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
                        ja: "ドラッグします",
                                                                      },
          effect: {
                        ja: "ダメージを与える前に、対戦相手のベンチ付きポケモンを防御するポケモンと交換することができます。もしそうなら、この攻撃は新しい防御ポケモンに20のダメージを与えます。対戦相手は、防御するポケモンを選択して切り替えます。",
                                                                      },
          damage: 20,
        },
        {
          cost: ["Darkness", "Darkness", "Colorless"],
          name: {
                        ja: "闇の爆発",
                                                                      },
          effect: {
                        ja: "Sharpedo Exに取り付けられた闇のエネルギーを捨てることができます。そうした場合、この攻撃は60のダメージに加えて20のダメージを与え、防御ポケモンに1つのエネルギーカードを破棄します。",
                                                                      },
        },
      ],


      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
		  {
			  type: "holo",
			  stamp: ["1st edition"],
		  }
      ],
};
