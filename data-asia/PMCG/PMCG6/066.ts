import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "サブリナのポリゴン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [137],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "鋭い点",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "バリア攻撃",
			},
			effect: {
				ja: "対戦相手の次のターン中にサブリナのポリゴンへの攻撃によって与えられたすべての損害は、（脱力と抵抗を適用した後）10減少します。",
			},
			damage: 20,
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
