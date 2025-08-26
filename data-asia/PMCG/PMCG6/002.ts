import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "コガのエカン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [23],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "迅速な毒",
			},
			effect: {
				ja: "2つのコインをフリップします。両方がヘッドである場合、防御するポケモンは混乱し、毒されています。",
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
