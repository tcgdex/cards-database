import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "Poliwrath",
    },

    rarity: "Holo Rare",
    category: "Pokemon",
    dexId: [62],
    hp: 120,
    types: ["Water"],
    stage: "Stage2",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "スパイラル",
            },
            effect: {
                ja: "Poliwrathがあなたのアクティブなポカモンである限り、あなたの相手の混乱したポカモンは退却することはできません。",
            },
        }],

    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "スパイラルパンチを分割します",
            },
            effect: {
                ja: "防御ポケモンは今混乱しています。",
            },
            damage: 20,
        },
        {
            cost: ["Water", "Colorless", "Colorless"],
            name: {
                ja: "メガスロー",
            },
            effect: {
                ja: "防御ポケモンがポケモン-Exの場合、この攻撃は50のダメージと30ダメージを与えます。",
            },
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
