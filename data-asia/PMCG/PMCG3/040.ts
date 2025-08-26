import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "カブトップス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [141],
	hp: 60,
	types: ["Fighting"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: {
				ja: "鋭い鎌",
			},
			damage: 30,
		},
		{
			cost: ["Fighting", "Fighting", "Fighting", "Fighting"],
			name: {
				ja: "吸収する",
			},
			effect: {
				ja: "Kabutopsから多くのダメージカウンターを削除し、防御ポケモンに与えられたダメージの半分に等しい（衰弱と抵抗を適用した後）（最も近い10に丸められた）。 Kabutopsがそれよりも少ないダメージカウンターを持っている場合は、それらすべてを削除します。",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
