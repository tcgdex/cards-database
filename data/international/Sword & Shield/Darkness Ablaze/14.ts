import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [761],

	name: {
		'en-us': "Bounsweet",
		'fr-fr': "Croquine",
		'es-es': "Bounsweet",
		'it-it': "Bounsweet",
		'pt-br': "Bounsweet",
		'de-de': "Frubberl"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Synthesis",
				'fr-fr': "Synthèse",
				'es-es': "Síntesis",
				'it-it': "Sintesi",
				'pt-br': "Síntese",
				'de-de': "Synthese"
			},
			effect: {
				'en-us': "Search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck une carte Énergie Grass, puis attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja 1 carta de Energía Grass y únela a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo una carta Energia Grass e assegnala a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por 1 carta de Energia Grass no seu baralho e ligue-a a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach 1 Grass-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Flop",
				'fr-fr': "Flop",
				'es-es': "Vuelta",
				'it-it': "Tonfo",
				'pt-br': "Baque",
				'de-de': "Plumps"
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

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Its body gives off a sweet, fruity scent that is extremely appetizing to bird Pokémon."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 482944,
				tcgplayer: 219227
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 482944,
				tcgplayer: 219227
			}
		},
	],
}

export default card
