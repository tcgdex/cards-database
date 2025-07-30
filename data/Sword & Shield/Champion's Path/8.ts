import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Incineroar V",
		fr: "Félinferno V",
		es: "Incineroar V",
		it: "Incineroar V",
		pt: "Incineroar V",
		de: "Fuegro V"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare V",
	category: "Pokemon",
	set: Set,
	hp: 220,

	types: [
		"Fire",
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Grand Flame",
				fr: "Flamme Colossale",
				es: "Llama Colosal",
				it: "Megafiammata",
				pt: "Grande Chama",
				de: "Gewaltige Flamme"
			},
			effect: {
				en: "Attach up to 2 Fire Energy cards from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez jusqu'à 2 cartes Énergie Fire de votre pile de défausse à l'un de vos Pokémon de Banc.",
				es: "Une hasta 2 cartas de Energía Fire de tu pila de descartes a 1 de tus Pokémon en Banca.",
				it: "Assegna a uno dei tuoi Pokémon in panchina fino a due carte Energia Fire dalla tua pila degli scarti.",
				pt: "Ligue até 2 cartas de Energia Fire da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				de: "Lege bis zu 2 Fire-Energiekarten aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 90,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare Blitzer",
				fr: "Dynamiteur",
				es: "Sacudida Ígnea",
				it: "Fuocoincursione",
				pt: "Labaredas Descontroladas",
				de: "Flammenblitzer"
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
				fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
				es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge anche 30 danni a se stesso.",
				pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
			},
			damage: 220,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",

	thirdParty: {
		cardmarket: 499895
	}
}

export default card
