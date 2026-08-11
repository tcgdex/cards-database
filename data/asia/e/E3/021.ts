import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "Vulpix",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [37],
    hp: 50,
    types: ["Fire"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Fire"],
            name: {
                ja: "火を集めます",
            },
            effect: {
                ja: "廃棄パイルに火災エネルギーカードがある場合は、コインをひっくり返します。頭の場合は、それらの1つをVulpixに取り付けます。",
            },
            damage: 10,
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
            subtype: "unlimited",
        }, {
            type: "normal",
            stamp: ["1st edition"],
        },
    ],
};

export default card
