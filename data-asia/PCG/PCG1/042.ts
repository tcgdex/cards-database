import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "電極Ex",
    },

    rarity: "Holo Rare",
    category: "Pokemon",
    dexId: [101],
    hp: 90,
    types: ["Lightning"],
    stage: "Stage1",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "余分なエネルギー爆弾",
            },
            effect: {
                ja: "ターン中（攻撃前）に、電極EXとそれに取り付けられたすべてのカードを破棄することができます（これは電極EXをノックアウトするとカウントされます）。そうした場合は、5枚のエネルギーカードを廃棄することを検索し、好きな方法でPokã©Mon（Pokã©Mon-Exを除く）のいずれかに添付してください。電極EXが特別な状態の影響を受ける場合、この電力は使用できません。",
            },
        }],

    attacks: [
        {
            cost: ["Lightning", "Colorless"],
            name: {
                ja: "押しつぶして燃やします",
            },
            effect: {
                ja: "プレイ中のポケモンに添付されているだけのエネルギーを捨てることができます。もしそうなら、この攻撃は30のダメージに加えて、あなたが捨てたエネルギーごとに20のダメージをさらに20回かけます。",
            },
        },
    ],

    retreat: 1,

    variants: [
        {
            type: "normal",
            subtype: "unlimited",
        },
        {
            type: "normal",
            stamp: ["1st edition"],
        },
    ],
};

export default card
