import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ブロックのdugtrio",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [51],
	hp: 60,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "低く横になる",
			},
			effect: {
				ja: "対戦相手の次のターン中にブロックのDugtrioに与えられたすべての損害は、20（脱力感と抵抗を適用した後）に20減ります。",
			},
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "アースドリル",
			},
			effect: {
				ja: "この攻撃は、BrockのDugtrioが昨年ターンのLie Low Attackを使用していない限り使用できません。",
			},
			damage: 60,
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
