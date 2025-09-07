import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "Scizor",
    },

    rarity: "Rare",
    category: "Pokemon",
    dexId: [212],
    hp: 80,
    types: ["Metal"],
    stage: "Stage1",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "毒抵抗",
            },
            effect: {
                ja: "Scizorは毒されることはできません。",
            },
        }],

    attacks: [
        {
            cost: ["Metal", "Colorless"],
            name: {
                ja: "スナッチ",
            },
            effect: {
                ja: "ダメージを与える前に、ダメージカウンターなしで対戦相手のベンチ付きポケモンを1つ選択し、防御ポケモンをそれに切り替えることができます。",
            },
            damage: 20,
        },
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                ja: "重金属",
            },
            effect: {
                ja: "Scizorに取り付けられた金属エネルギーの量に等しい多数のコインをひっくり返します。この攻撃は、30のダメージに加えて、ヘッドごとに20のダメージを与えます。",
            },
        },
    ],

    retreat: 2,

    variants: [
        {
            type: "normal",
        },
    ],
};

export default card
