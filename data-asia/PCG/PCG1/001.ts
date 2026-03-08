import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "キャタピー",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [10],
    hp: 50,
    types: ["Grass"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "進化の兆候",
            },
            effect: {
                ja: "メタポッドとバタフリーカードをデッキに検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
            },
        },
        {
            cost: ["Grass"],
            name: {
                ja: "ストリングショット",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            },
            damage: 10,
        },
    ],

    retreat: 1,

    variants: [
        {
            type: "normal",
            stamp: ["1st edition"],
        },
        {
            type: "normal",
            subtype: "unlimited",
        },
    ],
};

export default card
