import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Turtwig",
		fr: "Tortipouss",
		es: "Turtwig",
		it: "Turtwig",
		pt: "Turtwig",
		de: "Chelast"
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
				en: "Synthesis",
				fr: "Synthèse",
				es: "Síntesis",
				it: "Sintesi",
				pt: "Síntese",
				de: "Synthese"
			},
			effect: {
				en: "Search your deck for a Grass Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.",
				fr: "Cherchez une carte Énergie Grass dans votre deck et attachez-la à l’un de vos Pokémon. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Energía Grass y únela a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta Energia Grass e assegnala a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta de Energia Grass no seu baralho e ligue-a a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Grass-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Headbutt Bounce",
				fr: "Culbute Surprise",
				es: "Bote Cabezazo",
				it: "Rimbalzo Bottintesta",
				pt: "Cabeçada Ricochete",
				de: "Abrupter Kopfstoß"
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

	thirdParty: {
		cardmarket: 315938
	}
}

export default card
