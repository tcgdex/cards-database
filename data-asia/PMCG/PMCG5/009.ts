import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "エリカの暗闇",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [44],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "癒しの花粉",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、エリカの暗闇から4つのダメージカウンターを削除します。エリカの暗闇にそれよりもダメージカウンターが少ない場合は、それらすべてを削除します。",
			},
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "魔法の花粉",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンは今、眠っている、混乱し、麻痺し、毒されています（あなたの選択）。",
			},
			damage: 30,
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
