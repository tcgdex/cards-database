import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [459],

	name: {
		'en-us': "Snover",
		'fr-fr': "Blizzi",
		'es-es': "Snover",
		'it-it': "Snover",
		'pt-br': "Snover",
		'de-de': "Shnebedeck"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Beat",
				'fr-fr': "Bataille",
				'es-es': "Toque",
				'it-it': "Battuta",
				'pt-br': "Pulso",
				'de-de': "Verprügler"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'Herbe",
				'es-es': "Hoja Afilada",
				'it-it': "Foglielama",
				'pt-br': "Folha Navalha",
				'de-de': "Rasierblatt"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 90,
	types: ["Grass"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It lives on snowy mountains. It sinks its legs into the snow to absorb water and keep its own temperature down."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457453,
				tcgplayer: 213082
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457453,
				tcgplayer: 213082
			}
		},
	],
}

export default card
