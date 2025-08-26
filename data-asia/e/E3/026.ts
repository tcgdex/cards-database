import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "entei",
    },

    rarity: "Rare",
    category: "Pokemon",
    dexId: [244],
    hp: 70,
    types: ["Fire"],
    stage: "Basic",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "純粋な体",
            },
            effect: {
                ja: "手からEnteiにファイアエネルギーカードを取り付けるには、Enteiに取り付けられたエネルギーカードを捨てる必要があります。 （火エネルギーを取り付けてから、Enteiからエネルギーを捨てます。）",
            },
        }],

    attacks: [
        {
            cost: ["Fire", "Colorless", "Colorless"],
            name: {
                ja: "牙を燃やします",
            },
            effect: {
                ja: "コインをひっくり返すことができます。頭の場合は、Enteiに取り付けられた消防エネルギーカードを捨て、防御ポケモンが燃やされます。",
            },
            damage: 40,
        },
    ],

    retreat: 1,

    variants: [
        {
            type: "normal",
        },
    ],
};

export default card
