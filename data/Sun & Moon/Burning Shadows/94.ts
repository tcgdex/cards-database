import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Diancie",
		fr: "Diancie",
		es: "Diancie",
		it: "Diancie",
		pt: "Diancie",
		de: "Diancie"
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		719,
	],
	hp: 90,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Sparkling Wish",
				fr: "Espoir Étincelant",
				es: "Deseo Destellante",
				it: "Desiderio Scintillante",
				pt: "Desejo Brilhante",
				de: "Funkelnder Wunsch"
			},
			effect: {
				en: "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck une carte Évolution de l’un de vos Pokémon et placez-la sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta que evolucione de 1 de tus Pokémon y ponla sobre ese Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo una carta che si evolve da uno dei tuoi Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por 1 carta no seu baralho que evolua de 1 dos seus Pokémon e coloque-a sobre aquele Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach 1 Karte, die sich aus 1 deiner Pokémon entwickelt, und lege sie auf jenes Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Diamond Storm",
				fr: "Orage Adamantin",
				es: "Tormenta de Diamantes",
				it: "Diamantempesta",
				pt: "Tempestade Diamante",
				de: "Diamantsturm"
			},
			effect: {
				en: "Heal 30 damage from each of your Fairy Pokémon.",
				fr: "Soignez 30 dégâts à chacun de vos Pokémon Fairy.",
				es: "Cura 30 puntos de daño a cada uno de tus Pokémon Fairy.",
				it: "Cura ciascuno dei tuoi Pokémon Fairy da 30 danni.",
				pt: "Cure 30 pontos de dano de cada um dos seus Pokémon Fairy.",
				de: "Heile 30 Schadenspunkte bei jedem deiner Fairy-Pokémon."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
