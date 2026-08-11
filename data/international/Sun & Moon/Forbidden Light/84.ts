import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Flabébé",
		'fr-fr': "Flabébé",
		'es-es': "Flabébé",
		'it-it': "Flabébé",
		'pt-br': "Flabébé",
		'de-de': "Flabébé"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		669,
	],

	hp: 40,

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
				'en-us': "Secret Blessings",
				'fr-fr': "Bénédictions Secrètes",
				'es-es': "Bendiciones Secretas",
				'it-it': "Preghiera Segreta",
				'pt-br': "Bênçãos Secretas",
				'de-de': "Geheimer Segen"
			},
			effect: {
				'en-us': "Shuffle 3 in any combination of Pokémon and basic Energy cards from your discard pile into your deck.",
				'fr-fr': "Choisissez une combinaison de 3 Pokémon et Énergies de base dans votre pile de défausse et mélangez-les avec votre deck.",
				'es-es': "Pon, en cualquier combinación, 3 cartas de Pokémon y de Energía Básica de tu pila de descartes en tu baraja y barájalas todas.",
				'it-it': "Rimischia tre carte Pokémon e Energia base in qualsiasi combinazione dalla tua pila degli scarti nel tuo mazzo.",
				'pt-br': "Embaralhe 3 cartas de Pokémon e de Energia básica da sua pilha de descarte no seu baralho em qualquer combinação.",
				'de-de': "Mische eine beliebige Kombination aus 3 Pokémon und Basis-Energiekarten aus deinem Ablagestapel in dein Deck."
			},

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

	description: {
		'en-us': "When it finds a flower it likes, it dwells on that flower its whole life long. It floats in the wind's embrace with an untroubled heart.",
	},

	thirdParty: {
		cardmarket: 355597
	}
}

export default card
