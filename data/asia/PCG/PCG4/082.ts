import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "aipom",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [190],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "スナッピーな動き",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前に）一度、Aipomがベンチにいる場合は、カードを描くことができます。次に、Aipomに取り付けられたすべてのカードを破棄し、Aipomをデッキの底に置きます。ターンごとに1つ以上のスナッピーMOVEPokã©Powerを使用することはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "スナップテール",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
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
