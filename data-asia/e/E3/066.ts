import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "Furret",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [162],
    hp: 70,
    types: ["Colorless"],
    stage: "Stage1",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "スカベンジャーハント",
            },
            effect: {
                ja: "ターン中（攻撃の前に）一度、手から2枚のカードをデッキに入れることができます。次に、デッキを検索してエネルギーカードを検索し、相手に見せて、手に入れます。その後、デッキをシャッフルします。 Furretが特別な状態の影響を受けている場合、このパワーは使用できません。",
            },
        }],

    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "スピニング攻撃",
            },
            damage: 30,
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
