import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		'en-us': "Incineroar V",
		'fr-fr': "Félinferno V",
		'es-es': "Incineroar V",
		'it-it': "Incineroar V",
		'pt-br': "Incineroar V",
		'de-de': "Fuegro V"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [727],
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
				'en-us': "Grand Flame",
				'fr-fr': "Flamme Colossale",
				'es-es': "Llama Colosal",
				'it-it': "Megafiammata",
				'pt-br': "Grande Chama",
				'de-de': "Gewaltige Flamme"
			},
			effect: {
				'en-us': "Attach up to 2 Fire Energy cards from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez jusqu'à 2 cartes Énergie Fire de votre pile de défausse à l'un de vos Pokémon de Banc.",
				'es-es': "Une hasta 2 cartas de Energía Fire de tu pila de descartes a 1 de tus Pokémon en Banca.",
				'it-it': "Assegna a uno dei tuoi Pokémon in panchina fino a due carte Energia Fire dalla tua pila degli scarti.",
				'pt-br': "Ligue até 2 cartas de Energia Fire da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				'de-de': "Lege bis zu 2 Fire-Energiekarten aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
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
				'en-us': "Flare Blitzer",
				'fr-fr': "Dynamiteur",
				'es-es': "Sacudida Ígnea",
				'it-it': "Fuocoincursione",
				'pt-br': "Labaredas Descontroladas",
				'de-de': "Flammenblitzer"
			},
			effect: {
				'en-us': "This Pokémon also does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
				'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
				'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
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
		cardmarket: 499895,
		tcgplayer: 222329
	}
}

export default card
