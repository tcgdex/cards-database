import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "Moltres ex",
    },

    rarity: "Holo Rare",
    category: "Pokemon",
    dexId: [146],
    hp: 110,
    types: ["Fire"],
    stage: "Basic",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "伝説的な上昇",
            },
            effect: {
                ja: "ターン中に、Moltre Exを手からベンチに置くと、Moltre exでアクティブなPokã©Monの1を切り替えることができます。そうした場合、Pokã©Monに取り付けられた数の基本的な火エネルギーカードをMoltres exに移動することもできます。",
            },
        }],

    attacks: [
        {
            cost: ["Fire", "Fire", "Colorless"],
            name: {
                ja: "炎をつぶします",
            },
            effect: {
                ja: "Moltres Exに取り付けられたエネルギーカードを廃棄することができます。もしそうなら、防御するポケモンは混乱しています。",
            },
            damage: 60,
        },
    ],

    retreat: 2,

    variants: [
        {
            type: "holo",
            stamp: ["1st edition"],
        },
        {
            type: "holo",
            subtype: "unlimited",
        },
    ],
};

export default card
