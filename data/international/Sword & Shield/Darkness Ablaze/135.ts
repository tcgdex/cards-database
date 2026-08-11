import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [161],

	name: {
		'en-us': "Sentret",
		'fr-fr': "Fouinette",
		'es-es': "Sentret",
		'it-it': "Sentret",
		'pt-br': "Sentret",
		'de-de': "Wiesor"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la Famille",
				'es-es': "Llamar a la Familia",
				'it-it': "Cerca Famiglia",
				'pt-br': "Chamar a Família",
				'de-de': "Familienruf"
			},
			effect: {
				'en-us': "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 Pokémon Básico y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo un Pokémon Base e mettilo nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 Pokémon Básico no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Basis-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It stands on its tail so it can see a long way. If it spots an enemy, it cries loudly to warn its kind."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483554,
				tcgplayer: 219331
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483554,
				tcgplayer: 219331
			}
		},
	],
}

export default card
