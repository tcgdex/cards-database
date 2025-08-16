import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Flabébé",
		fr: "Flabébé",
		es: "Flabébé",
		it: "Flabébé",
		pt: "Flabébé",
		de: "Flabébé"
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
				en: "Secret Blessings",
				fr: "Bénédictions Secrètes",
				es: "Bendiciones Secretas",
				it: "Preghiera Segreta",
				pt: "Bênçãos Secretas",
				de: "Geheimer Segen"
			},
			effect: {
				en: "Shuffle 3 in any combination of Pokémon and basic Energy cards from your discard pile into your deck.",
				fr: "Choisissez une combinaison de 3 Pokémon et Énergies de base dans votre pile de défausse et mélangez-les avec votre deck.",
				es: "Pon, en cualquier combinación, 3 cartas de Pokémon y de Energía Básica de tu pila de descartes en tu baraja y barájalas todas.",
				it: "Rimischia tre carte Pokémon e Energia base in qualsiasi combinazione dalla tua pila degli scarti nel tuo mazzo.",
				pt: "Embaralhe 3 cartas de Pokémon e de Energia básica da sua pilha de descarte no seu baralho em qualquer combinação.",
				de: "Mische eine beliebige Kombination aus 3 Pokémon und Basis-Energiekarten aus deinem Ablagestapel in dein Deck."
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

	thirdParty: {
		cardmarket: 355597
	}
}

export default card
