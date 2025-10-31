import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "スローキング",
    },

    rarity: "Holo Rare",
    category: "Pokemon",
    dexId: [199],
    hp: 80,
    types: ["Psychic"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "バーストハンド",
            },
            effect: {
                ja: "相手の手を見てください。この攻撃は、エネルギーカードの数の10倍のダメージを与えます。",
            },
        },
        {
            cost: ["Psychic", "Colorless", "Colorless"],
            name: {
                ja: "シャッフル攻撃",
            },
            effect: {
                ja: "防御ポケモンに接続されたエネルギーカードの数に等しい相手のデッキの上にある多くのカードを見てください。それらのカードを任意の順序に置き、対戦相手のデッキの上に戻します。",
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
