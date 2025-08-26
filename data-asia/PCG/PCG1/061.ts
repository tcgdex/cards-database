import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "onix",
    },

    rarity: "Uncommon",
    category: "Pokemon",
    dexId: [95],
    hp: 80,
    types: ["Fighting"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Fighting"],
            name: {
                ja: "ロックスロー",
            },
            damage: 10,
        },
        {
            cost: ["Fighting", "Colorless"],
            name: {
                ja: "トンネリング",
            },
            effect: {
                ja: "対戦相手のベンチ付きポケモンを最大2つ選択します。この攻撃は、それぞれに10ダメージを与えます。 （ベンチ付きポケモンに衰弱と抵抗を適用しないでください。）Onixは次のターン中に攻撃できません。",
            },
        },
    ],

    retreat: 3,

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
