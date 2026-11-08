import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [846],

	name: {
		'en-us': "Arrokuda",
		'fr-fr': "Embrochet",
		'es-es': "Arrokuda",
		'it-it': "Arrokuda",
		'pt-br': "Arrokuda",
		'de-de': "Pikuda"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flock",
				'fr-fr': "Nuée",
				'es-es': "Multitud",
				'it-it': "Frotta",
				'pt-br': "Bando",
				'de-de': "Ausschwärmen"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Arrokuda and put them onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck jusqu'à 2 Embrochet, puis placez-les sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 cartas de Arrokuda y ponlas en tu Banca. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due Arrokuda e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 Arrokuda no seu baralho e coloque-os no seu Banco. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Pikuda und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'es-es': "Picotazo",
				'it-it': "Beccata",
				'pt-br': "Bicada",
				'de-de': "Pikser"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "If it sees any movement around it, this Pokémon charges for it straightaway, leading with its sharply pointed jaw. It's very proud of that jaw."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511625,
				tcgplayer: 226426
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511625,
				tcgplayer: 226426
			}
		},
	],
}

export default card
