import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Aggron",
		fr: "Galeking de Team Magma"
	},
	illustrator: "Hiromichi Sugiyama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		306,
	],
	hp: 120,
	types: [
		"Fighting",
		"Darkness",
	],

	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Crush",
				fr: "Écrase"
			},
			effect: {
				en: "Flip a coin for each Energy attached to Team Magma's Aggron. This attack does 30 damage times the number of heads.",
				fr: "Lancez une pièce pour chaque Énergie attachée à Galeking de Team Magma. Cette attaque inflige 30 dégâts multipliés par le nombre de faces."
			},
			damage: "30×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Land Stream",
				fr: "Courant de terre"
			},
			effect: {
				en: "You may discard any number of basic Energy cards attached to Team Magma's Aggron. If you do, this attack does 50 damage plus 20 more damage for each basic Energy card you discarded.",
				fr: "Vous pouvez défausser autant de cartes Énergie de base attachées à Galeking de Team Magma que vous le voulez. Cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie de base défaussée."
			},
			damage: "50+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
