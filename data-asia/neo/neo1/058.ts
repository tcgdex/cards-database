import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "スカルモリー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [227],
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "爪",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 20,
		},
		{
			cost: ["Metal", "Colorless", "Colorless"],
			name: {
				ja: "スチール翼",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、相手の次のターン中にスカルモリーへの攻撃によって与えられたすべての損傷は20増加します（脱力と抵抗を適用した後）。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
