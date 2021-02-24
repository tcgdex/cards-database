import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Camerupt",
		fr: "Camérupt",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		323,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Numel",
		fr: "Chamallot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Eruption",
				fr: "Éruption",
			},
			effect: {
				en: "Each player discards the top card of his or her deck. This attack does 60 more damage for each Energy card discarded in this way.",
				fr: "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 60 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
