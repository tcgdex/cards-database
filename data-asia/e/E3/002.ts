import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "暗闇",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [44],
    hp: 70,
    types: ["Grass"],
    stage: "Stage1",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "花粉を動かします",
            },
            effect: {
                ja: "暗闇が遊んでいる限り、各プレイヤーのアクティブなPokmonの抵抗は損傷を10だけ減らすだけです。",
            },
        }],

    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "眠り眠り",
            },
            effect: {
                ja: "防御するポケモンと暗闇の両方が眠っています（ダメージを与えた後）。",
            },
            damage: 20,
        },
    ],

    retreat: 2,

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
