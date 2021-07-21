import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Kyogre",
		fr: "Kyogre",
		es: "Kyogre",
		it: "Kyogre",
		pt: "Kyogre",
		de: "Kyogre"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		382,
	],
	hp: 130,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "High Water",
				fr: "Hautes Eaux",
				es: "Crecida Acuática",
				it: "Acqua Alta",
				pt: "Maré Alta",
				de: "Flutwasser"
			},
			effect: {
				en: "Attach 2 Water Energy cards from your discard pile to 1 of your Pokémon.",
				fr: "Attachez 2 cartes Énergie Water de votre pile de défausse à l’un de vos Pokémon.",
				es: "Une 2 cartas de Energía Water de tu pila de descartes a 1 de tus Pokémon.",
				it: "Assegna a uno dei tuoi Pokémon due carte Energia Water dalla tua pila degli scarti.",
				pt: "Ligue 2 cartas de Energia Water da sua pilha de descarte a 1 dos seus Pokémon.",
				de: "Lege 2 Water-Energiekarten aus deinem Ablagestapel an 1 deiner Pokémon an."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swirling Waves",
				fr: "Vagues Tourbillonnantes",
				es: "Remolino de Olas",
				it: "Turbine d’Onde",
				pt: "Turbilhão de Ondas",
				de: "Wellenwirbel"
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon.",
				it: "Scarta un’Energia assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia deste Pokémon.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
