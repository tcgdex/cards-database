import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "beedrill",
    },

    rarity: "Holo Rare",
    category: "Pokemon",
    dexId: [15],
    hp: 90,
    types: ["Grass"],
    stage: "Stage2",

    attacks: [
        {
            cost: ["Grass"],
            name: {
                ja: "毒物",
            },
            effect: {
                ja: "防御ポケモンは現在中毒になっています。",
            },
            damage: 20,
        },
        {
            cost: ["Grass", "Colorless", "Colorless"],
            name: {
                ja: "リンク針",
            },
            effect: {
                ja: "この攻撃は、50のダメージと、プレイ中のビードリル（これを除く）ごとに30ダメージを与えます。",
            },
        },
    ],


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
