import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
		es: "Psyduck",
		it: "Psyduck",
		pt: "Psyduck",
		de: "Enton"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		54,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Firefighting",
				fr: "Anti-Flammes",
			},
			effect: {
				en: "Discard a Fire Energy attached to the Defending Pokémon.",
				fr: "Défaussez une Énergie Fire attachée au Pokémon Défenseur.",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
