import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "ペルシャ語",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [53],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "傷",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "騒ぎます",
			},
			effect: {
				ja: "防衛ポケモンが対戦相手の次のターン中にペルシャ語を攻撃した場合、攻撃によって与えられた損害は10倍に減少します（脱力感と抵抗を適用した後）。",
			},
			damage: 30,
		},
	],


	variants : [
		{
			type: "normal",
		},
	],
};

export default card
