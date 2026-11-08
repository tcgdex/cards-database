import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Turtwig",
		'fr-fr': "Tortipouss",
		'es-es': "Turtwig",
		'it-it': "Turtwig",
		'pt-br': "Turtwig",
		'de-de': "Chelast"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		387,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
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
				'fr-fr': "Cherchez une carte Énergie Grass dans votre deck et attachez-la à l’un de vos Pokémon. Mélangez ensuite votre deck.",
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
				'en-us': "Headbutt Bounce",
				'fr-fr': "Culbute Surprise",
				'es-es': "Bote Cabezazo",
				'it-it': "Rimbalzo Bottintesta",
				'pt-br': "Cabeçada Ricochete",
				'de-de': "Abrupter Kopfstoß"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It undertakes photosynthesis with its body, making oxygen. The leaf on its head wilts if it is thirsty.",
	},

	thirdParty: {
		cardmarket: 315938,
		tcgplayer: 157623
	}
}

export default card
