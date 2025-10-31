import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "sudowoodo",
    },

    rarity: "Rare",
    category: "Pokemon",
    dexId: [185],
    hp: 60,
    types: ["Fighting"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "コピー",
            },
            effect: {
                ja: "防御ポケモンの攻撃の1つを選択します。その攻撃をコピーします。 Sudowoodoにその攻撃を使用するのに必要なエネルギーがない場合、この攻撃は何もしません。 （その攻撃を使用するために必要な他のことをまだしなければなりません。）",
            },
        },
        {
            cost: ["Fighting"],
            name: {
                ja: "エネルギーの引き分け",
            },
            effect: {
                ja: "デッキを検索して、基本的なエネルギーカードを調べ、sudowoodoに添付してください。その後、デッキをシャッフルします。",
            },
        },
    ],

    retreat: 2,

    variants: [
        {
            type: "normal",
        },
    ],
};

export default card
