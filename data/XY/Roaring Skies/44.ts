import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Togetic",
		fr: "Togetic",
		es: "Togetic",
		it: "Togetic",
		pt: "Togetic",
		de: "Togetic"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		176,
	],

	hp: 80,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Togepi",
		fr: "Togepi",
		es: "Togepi",
		it: "Togepi",
		pt: "Togepi",
		de: "Togepi"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Go Fetch",
				fr: "Récup'",
				es: "Ir a Buscar",
				it: "Riporto",
				pt: "Vá Buscar",
				de: "Herbeischaffen"
			},
			effect: {
				en: "Shuffle 3 basic Energy cards from your discard pile into your deck.",
				fr: "Mélangez 3 cartes Énergie de base de votre pile de défausse avec votre deck.",
				es: "Pon 3 cartas de Energía Básica de tu pila de descartes en tu baraja y barájalas todas.",
				it: "Rimischia tre carte Energia base dalla tua pila degli scarti nel tuo mazzo.",
				pt: "Embaralhe 3 cards de Energia básica da sua pilha de descarte no seu baralho.",
				de: "Mische 3 Basis-Energiekarten aus deinem Ablagestapel in dein Deck."
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fairy Wind",
				fr: "Vent Féérique",
				es: "Viento Feérico",
				it: "Vento di Fata",
				pt: "Vento de Fada",
				de: "Feenbrise"
			},

			damage: 40,

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

	thirdParty: {
		cardmarket: 282712
	}
}

export default card
