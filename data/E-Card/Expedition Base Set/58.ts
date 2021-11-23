import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Pichu",
		fr: "Pichu"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		172,
	],
	hp: 30,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Energy Patch",
				fr: "Rajout d'énergie"
			},
			effect: {
				en: "Take an Energy card attached to one of your Pokémon and attach it to another of your Pokémon.",
				fr: "Prenez une carte Énergie de base attachée à l'un de vos Pokémon et attachez-la à un autre de vos Pokémon."
			},

		},
	],






}

export default card
