import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
    set: Set,
    name: {
        ja: "Mareep",
    },

    rarity: "Common",
    category: "Pokemon",
    dexId: [179],
    hp: 40,
    types: ["Lightning"],
    stage: "Basic",

    attacks: [
        {
            cost: ["Colorless"],
            name: {
                ja: "充電",
            },
            effect: {
                ja: "廃棄パイルからMareepに1つの稲妻エネルギーカードを取り付けます。",
            },
        },
        {
            cost: ["Lightning", "Colorless"],
            name: {
                ja: "テールスラップ",
            },
            damage: 20,
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
