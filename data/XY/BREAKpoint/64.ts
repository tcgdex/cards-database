import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Phantump",
		fr: "Brocélôme",
		es: "Phantump",
		it: "Phantump",
		pt: "Phantump",
		de: "Paragoni"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		708,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ascension",
				fr: "Ascension",
				es: "Ascensión",
				it: "Ascensione",
				pt: "Ascensão",
				de: "Aufstieg"
			},
			effect: {
				en: "Search your deck for a card that evolves from this Pokémon and put it onto this Pokémon. (This counts as evolving this Pokémon.) Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon. (Cela équivaut à faire évoluer ce Pokémon.) Mélangez ensuite votre deck.",
				es: "Busca en tu baraja 1 carta que evolucione de este Pokémon y ponla sobre él. (Esto equivale a hacer evolucionar a este Pokémon). Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo una carta che si evolve da questo Pokémon e metticela sopra (quest'azione vale come evoluzione del Pokémon). Poi rimischia le carte del tuo mazzo.",
				pt: "Procure em seu baralho um card que evolua deste Pokémon e coloque-o sobre este Pokémon. (Isso conta como evoluir este Pokémon.) Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach 1 Karte, zu der sich dieses Pokémon entwickelt, und lege sie auf dieses Pokémon (dies zählt als Entwicklung dieses Pokémon). Mische anschließend dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 288239,
		tcgplayer: 111605
	}
}

export default card
