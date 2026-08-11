import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Reshiram",
		'fr-fr': "Reshiram",
		'es-es': "Reshiram",
		'it-it': "Reshiram",
		'pt-br': "Reshiram",
		'de-de': "Reshiram"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		643,
	],

	hp: 130,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Outrage",
				'fr-fr': "Colère",
			},
			effect: {
				'en-us': "Does 10 more damage for each damage counter on this Pokémon.",
				'fr-fr': "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Blue Flare",
				'fr-fr': "Flamme Bleue",
			},
			effect: {
				'en-us': "Discard 2 Fire Energy attached to this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies Fire attachées à ce Pokémon.",
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This Pokémon appears in legends. It sends flames into the air from its tail, burning up everything around it.",
	},

	thirdParty: {
		cardmarket: 280246,
		tcgplayer: 88707
	}
}

export default card
