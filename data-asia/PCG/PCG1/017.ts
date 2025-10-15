import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "Victreebel",
    },

    rarity: "Holo Rare",
    category: "Pokemon",
    dexId: [71],
    hp: 110,
    types: ["Grass"],
    stage: "Stage2",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "酸サンプラー",
            },
            effect: {
                ja: "Victreebelがあなたのアクティブなポカモンである限り、ターンの間に防御する各ポカモンに1つのダメージカウンターを置きます。他のアクティブなPokã©MonがVictreebelではない場合、酸サンプラーは機能しなくなります。",
            },
        }],

    attacks: [
        {
            cost: ["Grass", "Colorless", "Colorless"],
            name: {
                ja: "酸",
            },
            effect: {
                ja: "ディフェンディングポケモンは、相手の次のターンの終わりまで退却することはできません。",
            },
            damage: 50,
        },
    ],

    retreat: 2,

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
