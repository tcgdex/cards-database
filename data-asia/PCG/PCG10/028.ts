import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "チンチョウ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [170],
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "正のイオン",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "負のイオン",
			},
			effect: {
				ja: "対戦相手の次のターン中に、防御ポケモンからの攻撃による損害は10倍に減少します（脱力感と抵抗を適用する前に）。",
			},
			damage: 10,
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
