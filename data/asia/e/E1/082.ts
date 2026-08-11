import { Card } from "models/database/card"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピチュ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [172],
	hp: 30,
	types: ["Lightning"],
	stage: "Baby",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				'ja-jp': "エネルギーパッチ",
			},
			effect: {
				'ja-jp': "ポケモンの1つに取り付けられた基本的なエネルギーカードを取り、ポケモンのもう1つに取り付けます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
