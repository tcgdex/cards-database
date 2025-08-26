import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "PoliWhirl",
    },

    rarity: "Rare",
    category: "Pokemon",
    dexId: [61],
    hp: 80,
    types: ["Water"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "エネルギーストリーム",
            },
            effect: {
                ja: "廃棄物の山を検索して、基本的なエネルギーカードを調べ、PoliWhirlに添付してください。",
            },
            damage: 10,
        },
        {
            cost: ["Water", "Colorless"],
            name: {
                ja: "バブル",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            },
            damage: 20,
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
