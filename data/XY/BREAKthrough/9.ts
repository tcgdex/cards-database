import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Chespin",
		fr: "Marisson",
		es: "Chespin",
		it: "Chespin",
		pt: "Chespin",
		de: "Igamaro"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		650,
	],
	hp: 60,
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
				en: "Tree Climb",
				fr: "Escal'Arbre",
				es: "Trepar Árboles",
				it: "Rampicalbero",
				pt: "Escalada em Árvore",
				de: "Baumkletterer"
			},
			effect: {
				en: "Search your deck for a Grass Energy card, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie Grass dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta de Energía Grass, enséñala y ponla en tu mano. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo una carta Energia Grass, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho um card de Energia Grass, revele-o e coloque-o em sua mão. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach 1 Grass-Energiekarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Seed Bomb",
				fr: "Canon Graine",
				es: "Bomba Germen",
				it: "Semebomba",
				pt: "Bomba de Sementes",
				de: "Samenbomben"
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

	retreat: 1,



}

export default card
