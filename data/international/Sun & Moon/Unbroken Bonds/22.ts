import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Arcanine",
		'fr-fr': "Arcanin",
		'es-es': "Arcanine",
		'it-it': "Arcanine",
		'pt-br': "Arcanine",
		'de-de': "Arkani"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 140,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
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
				'en-us': "Attach 2 Fire Energy cards from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez 2 cartes Énergie Fire de votre pile de défausse à l’un de vos Pokémon de Banc.",
				'es-es': "Une 2 cartas de Energía Fire de tu pila de descartes a 1 de tus Pokémon en Banca.",
				'it-it': "Assegna a uno dei tuoi Pokémon in panchina due carte Energia Fire dalla tua pila degli scarti.",
				'pt-br': "Ligue 2 cartas de Energia Fire da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				'de-de': "Lege 2 Fire-Energiekarten aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 120,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Heat Tackle",
				'fr-fr': "Charge Énergétique",
				'es-es': "Placaje Ardiente",
				'it-it': "Calorazione",
				'pt-br': "Golpe de Colisão Aquecido",
				'de-de': "Hitze Tackle"
			},
			effect: {
				'en-us': "This Pokémon does 50 damage to itself.",
				'fr-fr': "Ce Pokémon s’inflige 50 dégâts.",
				'es-es': "Este Pokémon se hace 50 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 50 danni a se stesso.",
				'pt-br': "Este Pokémon causa 50 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 50 Schadenspunkte zu."
			},
			damage: 190,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Legends tell of its fighting alongside a general and conquering a whole country.",
	},

	thirdParty: {
		cardmarket: 372314,
		tcgplayer: 189063
	}
}

export default card
