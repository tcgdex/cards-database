import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Popplio",
		'fr-fr': "Otaquin",
		'es-es': "Popplio",
		'it-it': "Popplio",
		'pt-br': "Popplio",
		'de-de': "Robball"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		728,
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
				'en-us': "Pound",
				'fr-fr': "Écras’Face",
				'es-es': "Destructor",
				'it-it': "Botta",
				'pt-br': "Pancada",
				'de-de': "Pfund"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'es-es': "Pistola Agua",
				'it-it': "Pistolacqua",
				'pt-br': "Revolver d’Água",
				'de-de': "Aquaknarre"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon snorts body fluids from its nose, blowing balloons to smash into its foes. It's famous for being a hard worker.",
	},

	thirdParty: {
		cardmarket: 294122,
		tcgplayer: 126910
	}
}

export default card
