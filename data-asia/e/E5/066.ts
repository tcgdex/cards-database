import { Card } from "../../../interfaces"
import Set from "../E5"

const card: Card = {
	set: Set,
	name: {
		ja: "Teddiursa",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [216],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "奇襲",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "怒り",
			},
			effect: {
				ja: "この攻撃は、Teddiursaの各ダメージカウンターに対して10ダメージと10ダメージをさらに10回かけます。",
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
			stamp: ["1st Edition"],
		},
	],
};

export default card
