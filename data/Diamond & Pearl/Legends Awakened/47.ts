import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Camerupt",
		fr: "Camerupt",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		323,
	],
	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Numel",
		fr: "Camaub",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Eruption",
				fr: "Éruption",
			},
			effect: {
				en: "Each player discards the top card of his or her deck. This attack does 30 damage plus 30 more damage for each Energy card discarded in this way.",
				fr: "Chaque joueur défausse la carte du dessus de son deck. Cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
			},
			effect: {
				en: "Camerupt does 20 damage to itself.",
				fr: "Camerupt s'inflige 20 dégâts.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 3,



}

export default card
