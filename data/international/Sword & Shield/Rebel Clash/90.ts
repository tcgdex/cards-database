import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Drakloak",
		'fr-fr': "Dispareptil",
		'es-es': "Drakloak",
		'it-it': "Drakloak",
		'pt-br': "Drakloak",
		'de-de': "Phandra"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [886],
	set: Set,

	evolveFrom: {
		'en-us': "Dreepy",
		'fr-fr': "Fantyrm",
		'es-es': "Dreepy",
		'it-it': "Dreepy",
		'pt-br': "Dreepy",
		'de-de': "Grolldra"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Summon",
				'fr-fr': "Citation",
				'es-es': "Llamamiento",
				'it-it': "Invocazione",
				'pt-br': "Convidar",
				'de-de': "Herbeirufen"
			},
			effect: {
				'en-us': "Search your deck for a Dreepy and put it onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Cherchez un Fantyrm dans votre deck, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 Dreepy y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo un Dreepy e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 Dreepy no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Grolldra und lege es auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'es-es': "Mordisco",
				'it-it': "Morso",
				'pt-br': "Mordida",
				'de-de': "Biss"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	hp: 90,
	types: ["Psychic"],
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It's capable of flying faster than 120 mph. It battles alongside Dreepy and dotes on them until they successfully evolve."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457868,
				tcgplayer: 213176
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457868,
				tcgplayer: 213176
			}
		},
	],
}

export default card
