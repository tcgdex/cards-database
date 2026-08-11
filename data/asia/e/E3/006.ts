import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "パラセクト",
    },

    rarity: "Uncommon",
    category: "Pokemon",
    dexId: [47],
    hp: 70,
    types: ["Grass"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Grass"],
            name: {
                ja: "スリープインデューサー",
            },
            effect: {
                ja: "対戦相手のベンチ付きポケモンの1つを選択し、防御ポケモンをそれで切り替えます。新しい防御ポケモンは今眠っています。",
            },
        },
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "歓喜",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、防御するポケモンは今眠っています。テールの場合、ParaSectから2つのダメージカウンターを削除します。",
            },
            damage: 20,
        },
    ],

    retreat: 1,

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
