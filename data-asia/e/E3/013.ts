import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "exeggutor",
    },

    rarity: "Rare",
    category: "Pokemon",
    dexId: [103],
    hp: 80,
    types: ["Grass"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "スーパーエッグスロシオン",
            },
            effect: {
                ja: "ポケモンの任意の数に接続されたエネルギーカードを任意の数に捨てます。この方法で破棄されたエネルギーカードの数に等しい数のコインをひっくり返します。この攻撃は、ヘッド数の40回のダメージ倍になります。",
            },
        },
        {
            cost: ["Grass"],
            name: {
                ja: "ショットと呼ばれます",
            },
            effect: {
                ja: "対戦相手のベンチポケモンを1つ選択します。この攻撃は、exeggutorに取り付けられた草のエネルギーの量を10回ダメージします。 （ベンチポケモンに衰弱や抵抗を適用しないでください。）",
            },
        },
    ],

    retreat: 1,

    variants: [
        {
            type: "normal",
            subtype: "unlimited",
        }, {
            type: "normal",
            stamp: ["1st edition"],
        },
    ],
};

export default card
