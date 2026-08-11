import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'de-de': "Nebulak"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		92,
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
				'en-us': "Pain Payback",
				'fr-fr': "Renvoi de souffrance",
				'de-de': "Schmerzrückzahlung"
			},
			effect: {
				'en-us': "Move 1 damage counter from Gastly to 1 of your opponent's Pokémon.",
				'fr-fr': "Déplacez 1 marqueur de dégât de Fantominus sur 1 des Pokémon de votre adversaire.",
				'de-de': "Entferne 1 Schadensmarke von Nebulak und lege sie auf 1 Pokémon deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon's body is 95% made up of gases, which are blown away by strong gusts of wind.",
		'fr-fr': "Le corps de ce Pokémon est composé de gaz à 95%. Une bourrasque suffit à le disperser."
	},

	thirdParty: {
		cardmarket: 277581,
		tcgplayer: 85652
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
