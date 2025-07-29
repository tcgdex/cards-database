import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Clefable",
		fr: "Mélodelfe",
		es: "Clefable",
		it: "Clefable",
		pt: "Clefable",
		de: "Pixi"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		36,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Moon Guidance",
				fr: "Guide Lunaire",
				es: "Guía Lunar",
				it: "Guida della Luna",
				pt: "Guia Lunar",
				de: "Mondführung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, cherchez dans votre deck une carte Évolution de l’un de vos Pokémon et placez-la sur le Pokémon. (Cela équivaut à faire évoluer le Pokémon.) Mélangez ensuite votre deck.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes lanzar una moneda. Si sale cara, busca en tu baraja una carta que evolucione de 1 de tus Pokémon y ponla sobre ese Pokémon. (Esto equivale a hacer evolucionar a ese Pokémon.) Baraja las cartas de tu baraja después.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, cerca nel tuo mazzo una carta che si evolve da uno dei tuoi Pokémon e metticela sopra (quest’azione vale come evoluzione del Pokémon). Poi rimischia le carte del tuo mazzo.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode jogar uma moeda. Se sair cara, procure em seu baralho um card que evolua de 1 dos seus Pokémon e coloque-o naquele Pokémon. (Isso conta como evoluir esse Pokémon.) Em seguida, embaralhe seus cards.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Münze werfen. Durchsuche bei „Kopf“ dein Deck nach einer Karte, zu der sich 1 deiner Pokémon entwickelt, und lege sie auf das entsprechende Pokémon. (Dies zählt als Entwicklung des Pokémon.) Mische anschließend dein Deck."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Moon Impact",
				fr: "Impact Lunaire",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280838
	}
}

export default card
