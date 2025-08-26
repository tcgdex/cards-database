import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "pidgeot",
    },

    rarity: "Holo Rare",
    category: "Pokemon",
    dexId: [18],
    hp: 100,
    types: ["Colorless"],
    stage: "Stage2",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "クイック検索",
            },
            effect: {
                ja: "ターン中に（攻撃の前に）、デッキから1枚のカードを選択して手に入れることができます。その後、デッキをシャッフルします。ターンごとに1つ以上のクイック検索Pokã©-Powerを使用することはできません。 Pidgeotが特別な状態の影響を受ける場合、このパワーは使用できません。",
            },
        }],

    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "クラッチ",
            },
            effect: {
                ja: "ディフェンディングポケモンは、相手の次のターンの終わりまで退却することはできません。",
            },
            damage: 40,
        },
    ],


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
