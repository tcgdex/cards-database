import { Card } from "models/database/card"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドラゴンエア",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [148],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Water"],
			name: {
				'ja-jp': "スパイラルウェーブ",
			},
			effect: {
				'ja-jp': "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
	],

	retreat: 2,

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
