import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "ルギア",
    },

    rarity: "Secret Rare",
    category: "Pokemon",
    dexId: [249],
    hp: 80,
    types: ["Colorless"],
    stage: "Basic",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "クリスタルタイプ",
            },
            effect: {
                ja: "手からLugiaに火、水、またはサイキックベーシックエネルギーカードを取り付けると、ルギアのタイプ（色）はターンの終わりまでそのエネルギーカードのタイプと同じになります。",
            },
        }],

    attacks: [
        {
            cost: ["Psychic", "Fire"],
            name: {
                ja: "サイキック",
            },
            effect: {
                ja: "この攻撃は、防御ポケモンに添付されているエネルギーカードの数の10倍のダメージを与えます。",
            },
        },
        {
            cost: ["Water", "Water", "Fire", "Colorless"],
            name: {
                ja: "蒸気爆発",
            },
            effect: {
                ja: "Lugiaに取り付けられたエネルギーカードを廃棄します。",
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
