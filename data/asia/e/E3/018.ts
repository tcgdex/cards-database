import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "ピンシル",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [127],
    hp: 60,
    types: ["Grass"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "ホーングラブ",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。尾の場合、この攻撃は何もしません。",
            },
            damage: 20,
        },
        {
            cost: ["Grass", "Grass", "Colorless"],
            name: {
                ja: "スーパースライス",
            },
            effect: {
                ja: "2つのコインをフリップします。どちらかが尾の場合、この攻撃は何もしません。",
            },
            damage: 90,
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
