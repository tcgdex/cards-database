import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "スキスター",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [123],
    hp: 50,
    types: ["Grass"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "スラッシュ",
            },
            damage: 10,
        },
        {
            cost: ["Grass", "Colorless"],
            name: {
                ja: "迅速",
            },
            effect: {
                ja: "この攻撃の損傷は、脱力感、抵抗、pok？-Powers、pok？-bodies、または防御ポケモンに対するその他の影響の影響を受けません。",
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
