import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [277],

	name: {
		en: "Swellow",
		fr: "Hélédelle",
		es: "Swellow",
		it: "Swellow",
		pt: "Swellow",
		de: "Schwalboss"
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
		en: "Taillow",
		fr: "Nirondelle",
		es: "Taillow",
		it: "Taillow",
		pt: "Taillow",
		de: "Schwalbini"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-Attaque",
				es: "Ataque Rápido",
				it: "Attacco Rapido",
				pt: "Ataque Rápido",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Energy Assist",
				fr: "Assistance Énergétique",
				es: "Asistencia de Energía",
				it: "Assistienergia",
				pt: "Socorro de Energia",
				de: "Energieförderung"
			},
			effect: {
				en: "Attach up to 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez jusqu'à 2 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
				es: "Une hasta 2 cartas de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
				it: "Assegna a uno dei tuoi Pokémon in panchina fino a due carte Energia base dalla tua pila degli scarti.",
				pt: "Ligue até 2 cartas de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				de: "Lege bis zu 2 Basis-Energiekarten aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It dives at a steep angle as soon as it spots its prey. It catches its prey with sharp claws."
	},

	thirdParty: {
		cardmarket: 512380
	}
}

export default card
