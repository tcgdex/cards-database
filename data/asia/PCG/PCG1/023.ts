import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "Rapidash",
    },

    rarity: "Holo Rare",
    category: "Pokemon",
    dexId: [78],
    hp: 80,
    types: ["Fire"],
    stage: "Stage1",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "燃えるようなオーラ",
            },
            effect: {
                ja: "RapidashがアクティブなPokã©Monである限り、ターンの間に燃やされたポカモンに2つではなく4つのダメージカウンターを入れます。",
            },
        }],

    attacks: [
        {
            cost: ["Fire", "Colorless"],
            name: {
                ja: "炎を焼きます",
            },
            effect: {
                ja: "防御ポケモンは現在燃やされています。",
            },
            damage: 10,
        },
        {
            cost: ["Fire", "Colorless", "Colorless"],
            name: {
                ja: "リアキック",
            },
            damage: 40,
        },
    ],

    retreat: 1,

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
