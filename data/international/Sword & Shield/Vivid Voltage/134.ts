import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [277],

	name: {
		'en-us': "Swellow",
		'fr-fr': "Hélédelle",
		'es-es': "Swellow",
		'it-it': "Swellow",
		'pt-br': "Swellow",
		'de-de': "Schwalboss"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Taillow",
		'fr-fr': "Nirondelle",
		'es-es': "Taillow",
		'it-it': "Taillow",
		'pt-br': "Taillow",
		'de-de': "Schwalbini"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-Attaque",
				'es-es': "Ataque Rápido",
				'it-it': "Attacco Rapido",
				'pt-br': "Ataque Rápido",
				'de-de': "Ruckzuckhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Energy Assist",
				'fr-fr': "Assistance Énergétique",
				'es-es': "Asistencia de Energía",
				'it-it': "Assistienergia",
				'pt-br': "Socorro de Energia",
				'de-de': "Energieförderung"
			},
			effect: {
				'en-us': "Attach up to 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez jusqu'à 2 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
				'es-es': "Une hasta 2 cartas de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
				'it-it': "Assegna a uno dei tuoi Pokémon in panchina fino a due carte Energia base dalla tua pila degli scarti.",
				'pt-br': "Ligue até 2 cartas de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				'de-de': "Lege bis zu 2 Basis-Energiekarten aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	regulationMark: "D",
	retreat: 0,


	stage: "Stage1",

	description: {
		'en-us': "It dives at a steep angle as soon as it spots its prey. It catches its prey with sharp claws."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512380,
				tcgplayer: 226590
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512380,
				tcgplayer: 226590
			}
		},
	],
}

export default card
