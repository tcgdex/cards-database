import { Card } from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		ja: "クラビー",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [98],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "重要なピンチャー",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
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
