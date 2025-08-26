import { Card } from "../../../interfaces"
import Set from "../neo3"

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
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
			},
		},
		{
			cost: ["Water"],
			name: {
				ja: "負のイオン",
			},
			effect: {
				ja: "防御するポケモンが相手の次のターン中にチンチョウを攻撃する場合、チンチョーに与えられた損害は10増加します（脱力感と抵抗を適用する前に）。 （どちらかのポケモンがこの効果を終了するか、ベンチまたは進化します。）",
			},
			damage: 10,
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
