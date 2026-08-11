import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Terrakion",
		'fr-fr': "Terrakium",
		'es-es': "Terrakion",
		'it-it': "Terrakion",
		'pt-br': "Terrakion",
		'de-de': "Terrakium"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		639,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Boulder Crush",
				'fr-fr': "Rocher Écrasant",
			},

			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Sacred Sword",
				'fr-fr': "Lame Sainte",
			},
			effect: {
				'en-us': "This Pokémon can't use Sacred Sword during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Lame Sainte pendant votre prochain tour.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "This Pokémon came to the defense of Pokémon that had lost their homes in a war among humans.",
	},

	thirdParty: {
		cardmarket: 280028,
		tcgplayer: 89886
	}
}

export default card
