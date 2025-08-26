import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
    set: Set,
    name: {
        ja: "ニドキング",
    },

    rarity: "Holo Rare",
    category: "Pokemon",
    dexId: [34],
    hp: 120,
    types: ["Fighting"],
    stage: "Stage2",

    abilities: [
        {
            type: "Ability",
            name: {
                ja: "パワー遺伝子",
            },
            effect: {
                ja: "Nidokingが機能している限り、Nidoran F、Nidorina、Nidoqueen、Nidoran M、およびNidorinoによる攻撃は、Pokã©Monにさらに10ダメージを与えます。",
            },
        }],

    attacks: [
        {
            cost: ["Fighting", "Colorless"],
            name: {
                ja: "地球毒",
            },
            effect: {
                ja: "防衛ポケモンにダメージカウンターがすでにある場合、防御ポケモンは現在毒されています。",
            },
            damage: 40,
        },
        {
            cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
            name: {
                ja: "バウンドクラッシュ",
            },
            effect: {
                ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに60のダメージを与えます。 （ベンチ付きポケモンに衰弱と抵抗を適用しないでください。）Nidkingは、次のターン中にBound Crushを使用できません。",
            },
        },
    ],

    retreat: 3,

    variants: [
        {
            type: "holo",
            subtype: "unlimited",
        },
        {
            type: "holo",
            stamp: ["1st edition"],
        },
    ],
};

export default card
