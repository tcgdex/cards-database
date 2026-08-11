import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Victini ◇",
		'fr-fr': "Victini ◇",
		'es-es': "Victini ◇",
		'it-it': "Victini ◇",
		'pt-br': "Victini ◇",
		'de-de': "Victini ◇"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		494,
	],

	hp: 90,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Infinity",
				'fr-fr': "Infinité",
				'es-es': "Infinidad",
				'it-it': "Infinito",
				'pt-br': "Infinidade",
				'de-de': "Unendlichkeit"
			},
			effect: {
				'en-us': "This attack does 20 damage for each basic Energy card in your discard pile. Then, shuffle those cards into your deck.",
				'fr-fr': "Cette attaque inflige 20 dégâts pour chaque carte Énergie de base dans votre pile de défausse. Mélangez ensuite ces cartes avec votre deck.",
				'es-es': "Este ataque hace 20 puntos de daño por cada carta de Energía Básica en tu pila de descartes. Después, pon esas cartas en tu baraja y barájalas todas.",
				'it-it': "Questo attacco infligge 20 danni per ogni carta Energia base nella tua pila degli scarti. Poi rimischia quelle carte nel tuo mazzo.",
				'pt-br': "Este ataque causa 20 pontos de dano para cada carta de Energia básica na sua pilha de descarte. Em seguida, embaralhe aquelas cartas no seu baralho.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl der Basis-Energiekarten in deinem Ablagestapel zu. Mische jene Karten anschließend in dein Deck."
			},
			damage: "20×",

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'fr-fr': "Infinité",
			},
			effect: {
				'fr-fr': "Cette attaque inflige 20 dégâts pour chaque carte Énergie de base dans votre pile de défausse. Mélangez ensuite ces cartes avec votre deck.",
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it shares the infinite energy it creates, that being's entire body will be overflowing with power.",
	},

	thirdParty: {
		cardmarket: 363479
	}
}

export default card
