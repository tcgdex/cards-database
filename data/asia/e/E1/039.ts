import { Card } from "models/database/card"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "フラフィー",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [180],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "ヘッドバット",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				'ja-jp': "サンダージョルト",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合、Flaaffyはそれ自体に20のダメージを与えます。",
			},
			damage: 50,
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
