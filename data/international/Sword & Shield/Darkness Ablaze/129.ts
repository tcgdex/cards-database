import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [808],

	name: {
		'en-us': "Meltan",
		'fr-fr': "Meltan",
		'es-es': "Meltan",
		'it-it': "Meltan",
		'pt-br': "Meltan",
		'de-de': "Meltan"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Metal",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'Boule",
				'es-es': "Golpe Cabeza",
				'it-it': "Bottintesta",
				'pt-br': "Cabeçada",
				'de-de': "Kopfnuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Beam",
				'fr-fr': "Rayon",
				'es-es': "Transmisión",
				'it-it': "Raggio",
				'pt-br': "Feixe",
				'de-de': "Strahl"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It dissolves and eats metal. Circulating liquid metal within its body is how it generates energy."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483524,
				tcgplayer: 219391
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483524,
				tcgplayer: 219391
			}
		},
	],
}

export default card
