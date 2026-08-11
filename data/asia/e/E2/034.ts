import { Card } from "models/database/card"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Voltorb -034/092",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [100],
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ロールアウトする",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				'ja-jp': "サンダーショック",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
