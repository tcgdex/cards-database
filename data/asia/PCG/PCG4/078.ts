import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チャンジー",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [113],
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ハイパーヒーリング",
			},
			effect: {
				'ja-jp': "アクティブなポケモンのそれぞれから1つのダメージカウンターとすべての特別な条件を削除します。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "ダブルタックル",
			},
			effect: {
				'ja-jp': "防御する各ポケモンに20のダメージを与えます。",
			},
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
