import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "Steelix",
    },

    rarity: "Rare",
    category: "Pokemon",
    dexId: [208],
    hp: 100,
    types: ["Metal"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Colorless", "Colorless"],
            name: {
                ja: "地球の裂け目",
            },
            effect: {
                ja: "この攻撃は、相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに脱力や抵抗を適用しないでください。）次に、コインをひっくり返します。テールの場合、この攻撃は次のターン中に使用できません。",
            },
            damage: 10,
        },
        {
            cost: ["Metal", "Metal", "Colorless", "Colorless"],
            name: {
                ja: "アイアンスマッシュ",
            },
            effect: {
                ja: "2つのコインをフリップします。両方がヘッドである場合、この攻撃は50のダメージと20のダメージをさらに20回かけます。両方が尾の場合、この攻撃は何もしません。 1がヘッドで、1がテールの場合、この攻撃は50ダメージを与えます。",
            },
        },
    ],

    retreat: 4,

    variants: [
        {
            type: "normal",
            subtype: "unlimited",
        },
    ],
};

export default card
