import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "ドドリオ",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [85],
    hp: 70,
    types: ["Colorless"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "トライ攻撃",
            },
            effect: {
                ja: "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
            },
        },
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "ペック攻撃",
            },
            effect: {
                ja: "2つのコインをフリップします。それらの1つがヘッドである場合、この攻撃は20のダメージを与えます。両方がヘッドである場合、この攻撃は50のダメージを与えます。両方が尾である場合、防御するポケモンは今混乱しています。",
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
            subtype: "unlimited",
        }, {
            type: "normal",
            stamp: ["1st edition"],
        },
    ],
};

export default card
