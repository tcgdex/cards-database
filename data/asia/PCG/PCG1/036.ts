import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "Articuno Ex",
    },

    rarity: "Holo Rare",
    category: "Pokemon",
    dexId: [144],
    hp: 110,
    types: ["Water"],
    stage: "Basic",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "伝説的な上昇",
            },
            effect: {
                ja: "ターン中に、Articuno Exを手からベンチに置くと、Articuno ExでアクティブなPokã©Monの1を切り替えることができます。もしそうなら、あなたはあなたのポカモンに取り付けられた任意の数の基本的な水エネルギーカードをArticuno Exに移動することもできます。",
            },
        }],

    attacks: [
        {
            cost: ["Water", "Water", "Colorless"],
            name: {
                ja: "コールドクラッシュ",
            },
            effect: {
                ja: "Articuno Exに取り付けられたエネルギーカードを破棄できます。もしそうなら、相手は防御ポケモンに取り付けられたエネルギーカードを破棄します。",
            },
            damage: 50,
        },
    ],

    retreat: 2,

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
