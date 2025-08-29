import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "グリマー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [88],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "厄介なグー",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Grass"],
			name: {
				ja: "最小化します",
			},
			effect: {
				ja: "相手の次のターン中にグリマーへの攻撃によって与えられたすべての損害は、衰弱と抵抗を適用した後）20増加します。",
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
