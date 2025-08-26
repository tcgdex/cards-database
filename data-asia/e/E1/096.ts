import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "スカルモリー",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [227],
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Metal", "Colorless"],
			name: {
				ja: "鋼鉄のくちばし",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "エアカッター",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 50,
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
