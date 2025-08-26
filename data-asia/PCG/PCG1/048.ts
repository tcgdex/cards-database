import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "Gengar Ex",
    },

    rarity: "Holo Rare",
    category: "Pokemon",
    dexId: [94],
    hp: 150,
    types: ["Psychic"],
    stage: "Stage2",

    attacks: [
        {
            cost: ["Psychic", "Colorless"],
            name: {
                ja: "ポルターガイスト",
            },
            effect: {
                ja: "相手の手を見てください。この攻撃は、相手の手の中の各トレーナーカードに対して40のダメージと10ダメージを与えます。",
            },
        },
        {
            cost: ["Psychic", "Psychic", "Colorless"],
            name: {
                ja: "賞金",
            },
            effect: {
                ja: "対戦相手よりも多くの賞品が残っている場合、この攻撃は60ダメージに加えて40ダメージを与えます。",
            },
        },
    ],

    retreat: 2,

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
