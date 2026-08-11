import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Carkol",
		'fr-fr': "Wagomine",
		'es-es': "Carkol",
		'it-it': "Carkol",
		'pt-br': "Carkol",
		'de-de': "Wagong"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [838],
	set: Set,

	evolveFrom: {
		'en-us': "Rolycoly",
		'fr-fr': "Charbi",
		'es-es': "Rolycoly",
		'it-it': "Rolycoly",
		'pt-br': "Rolycoly",
		'de-de': "Klonkett"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Crash",
				'fr-fr': "Tacle Feu",
				'es-es': "Golpe Calor",
				'it-it': "Marchiafuoco",
				'pt-br': "Choque de Calor",
				'de-de': "Brandstempel"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 100,
	types: ["Fighting"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It forms coal inside its body. Coal dropped by this Pokémon once helped fuel the lives of people in the Galar region."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457943,
				tcgplayer: 213194
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457943,
				tcgplayer: 213194
			}
		},
	],
}

export default card
