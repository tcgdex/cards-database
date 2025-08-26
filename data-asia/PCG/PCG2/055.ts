import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "テイロウ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [276],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "飛ぶ",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。頭の場合は、対戦相手の次のターン中にTaillowに対して行われたダメージを含む攻撃のすべての影響を防ぎます。",
			},
			damage: 10,
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
