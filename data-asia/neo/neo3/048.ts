import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "Snubbull",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [209],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "噛む",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "荒れ狂うヘッドバット",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、この攻撃は10ダメージを加えて10ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
