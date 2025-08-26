import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "ニドキング",
    },

    rarity: "Secret Rare",
    category: "Pokemon",
    dexId: [34],
    hp: 100,
    types: ["Colorless"],
    stage: "Stage2",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "クリスタルタイプ",
            },
            effect: {
                ja: "草、稲妻、または火の基本エネルギーカードを手からニドギングに取り付けると、ニドキングのタイプ（色）はターンの終わりまでそのエネルギーカードのタイプと同じになります。",
            },
        }],

    attacks: [
        {
            cost: ["Grass", "Grass", "Colorless"],
            name: {
                ja: "ポイズンホーン",
            },
            effect: {
                ja: "防御ポケモンは現在中毒になっています。",
            },
            damage: 20,
        },
        {
            cost: ["Lightning", "Lightning", "Fighting", "Fighting"],
            name: {
                ja: "ローリングサンダー",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、この攻撃は相手のベンチポケモンのそれぞれに10ダメージを与えます。尾の場合、この攻撃はベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱や抵抗を適用しないでください。）",
            },
            damage: 50,
        },
    ],

    retreat: 3,

    variants: [
        {
            type: "normal",
        },
    ],
};

export default card
