import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コイル",
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [81],
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "取り組む",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				'ja-jp': "磁気",
			},
			effect: {
				'ja-jp': "ベンチにある各マグネミテ、マグネトン、ダークマグネトンに10ダメージを加えて10ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575728
			},
		},
	],
};

export default card
