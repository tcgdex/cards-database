import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コルサラ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [222],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "助けを求めて泣きます",
			},
			effect: {
				'ja-jp': "デッキを検索したり、ポケモンとの戦い（ポケモンエクスを除く）を検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Water"],
			name: {
				'ja-jp': "二重攻撃",
			},
			effect: {
				'ja-jp': "対戦相手のベンチポケモンの2つを選択します。この攻撃は、それぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
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
