import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "マグネトン",
    },

    rarity: "Rare",
    category: "Pokemon",
    dexId: [82],
    hp: 80,
    types: ["Lightning"],
    stage: "Stage1",

    attacks: [
        {
            cost: ["Lightning", "Colorless"],
            name: {
                ja: "サンダーショック",
            },
            effect: {
                ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            },
            damage: 20,
        },
        {
            cost: ["Colorless", "Colorless", "Colorless"],
            name: {
                ja: "スピードショット",
            },
            effect: {
                ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに40のダメージを与えます。この攻撃の損傷は、脱力感、抵抗、ポケの提唱、ポケボディ、またはそのポケモンに対するその他の影響の影響を受けません。",
            },
        },
    ],

    retreat: 1,

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
