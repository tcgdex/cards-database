import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Duskull",
		fr: "Skelénox",
	},
	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		355,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde Folie",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
