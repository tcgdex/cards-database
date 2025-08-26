import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ジオドード",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [74],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "石の弾幕",
			},
			effect: {
				ja: "尾がなくなるまでコインをひっくり返します。この攻撃は、ヘッド数の10倍のダメージを与えます。",
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
