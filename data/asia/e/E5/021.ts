import { Card } from "models/database/card"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "猟犬",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [228],
	hp: 50,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "報復",
			},
			effect: {
				'ja-jp': "この攻撃は、houndourのダメージカウンターの数の10倍のダメージを与えます。",
			},
		},
		{
			cost: ["Fire"],
			name: {
				'ja-jp': "花火",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合は、ハウンドに取り付けられた消防剤カードを捨ててください。",
			},
			damage: 20,
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
			stamp: ["1st Edition"],
		},
	],
};

export default card
