import { Card } from "models/database/card"
import Set from "../PCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スキッティ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [300],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "重要な用事",
			},
			effect: {
				'ja-jp': "デッキを検索してReact Energyカードを検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "ジャンプします",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。",
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
