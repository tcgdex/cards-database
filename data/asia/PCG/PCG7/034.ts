import { Card } from "models/database/card"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ホロンのキャストフォーム",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [351],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "デルタドロー",
			},
			effect: {
				'ja-jp': "カードにデルタを持っているポケモンの数を数えます。その多くのカードに作成します。",
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
