import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [130],

	name: {
		'en-us': "Gyarados",
		'fr-fr': "Léviator",
		'es-es': "Gyarados",
		'it-it': "Gyarados",
		'pt-br': "Gyarados",
		'de-de': "Garados"
	},

	illustrator: "hatachu",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'es-es': "Magikarp",
		'it-it': "Magikarp",
		'pt-br': "Magikarp",
		'de-de': "Karpador"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wrack Down",
				'fr-fr': "Réduire en Poussière",
				'es-es': "Desmoronar",
				'it-it': "Abbattere",
				'pt-br': "Desmoronar",
				'de-de': "Niederschleudern"
			},

			damage: 90,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Big Storm",
				'fr-fr': "Forte Tempête",
				'es-es': "Gran Tempestad",
				'it-it': "Fortempesta",
				'pt-br': "Tempestade Enorme",
				'de-de': "Großer Sturm"
			},
			effect: {
				'en-us': "Discard any Stadium in play.",
				'fr-fr': "Défaussez tout Stade en jeu.",
				'es-es': "Descarta cualquier Estadio en juego.",
				'it-it': "Scarta una carta Stadio qualsiasi in gioco.",
				'pt-br': "Descarte qualquer Estádio em jogo.",
				'de-de': "Lege 1 beliebige Stadionkarte im Spiel auf den Ablagestapel."
			},
			damage: 200,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,
	hp: 180,
	types: ["Water"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It has an extremely aggressive nature. The Hyper Beam it shoots from its mouth totally incinerates all targets."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 457643,
				tcgplayer: 213118
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457643,
				tcgplayer: 213118
			}
		},
	],
}

export default card
