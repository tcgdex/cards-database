import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Deoxys",
		fr: "Deoxys",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		386,
	],
	hp: 80,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Cell Storm",
				fr: "Tempête cellulaire",
			},
			effect: {
				en: "Discard 2 Psychic Energy attached to Deoxys and remove 6 damage counters from Deoxys.",
				fr: "Défaussez 2 Énergies Psychic attachées à Deoxys et retirez-lui 6 marqueurs de dégâts.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
