import { Card } from "models/database/card"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スカルモリー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [227],
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Metal", "Colorless"],
			name: {
				'ja-jp': "鋼鉄のくちばし",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "エアカッター",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
