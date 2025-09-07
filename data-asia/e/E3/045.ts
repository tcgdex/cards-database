import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "ラントン",
    },

    rarity: "Holo Rare",
    category: "Pokemon",
    dexId: [171],
    hp: 80,
    types: ["Lightning"],
    stage: "Stage1",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "イオンコーティング",
            },
            effect: {
                ja: "ターンのそれぞれ（攻撃の前）にこのパワーを1回使用できます。アクティブなポクモンに取り付けられたすべての稲妻エネルギーは、残りのターンのために水エネルギーになります。 （この効果は、アクティブなPokmonが後退するか、手に戻された場合に終了します。）Lanturnが特別な状態の影響を受けている場合、このパワーは使用できません。",
            },
        }],

    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "電気タックル",
            },
            effect: {
                ja: "この攻撃は、ラントゥルンに取り付けられた各稲妻エネルギーに対して20のダメージに加えて10ダメージを与えます。コインをひっくり返します。尾の場合、ラントゥルンは、それに取り付けられた各稲妻エネルギーに対してそれ自体に10ダメージを与えます。",
            },
        },
    ],

    retreat: 1,

    variants: [
        {
            type: "normal",
        },
    ],
};

export default card
