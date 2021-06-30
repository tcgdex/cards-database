import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin",
		es: "Arcanine",
		it: "Arcanine",
		pt: "Arcanine",
		de: "Arkani"
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
		en: "Growlithe",
		fr: "Caninos",
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
				en: "Grand Flame",
				fr: "Flamme Colossale",
				es: "Llama Colosal",
				it: "Megafiammata",
				pt: "Grande Chama",
				de: "Gewaltige Flamme"
			},
			effect: {
				en: "Attach 2 Fire Energy cards from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez 2 cartes Énergie Fire de votre pile de défausse à l’un de vos Pokémon de Banc.",
				es: "Une 2 cartas de Energía Fire de tu pila de descartes a 1 de tus Pokémon en Banca.",
				it: "Assegna a uno dei tuoi Pokémon in panchina due carte Energia Fire dalla tua pila degli scarti.",
				pt: "Ligue 2 cartas de Energia Fire da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				de: "Lege 2 Fire-Energiekarten aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
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
				en: "Heat Tackle",
				fr: "Charge Énergétique",
				es: "Placaje Ardiente",
				it: "Calorazione",
				pt: "Golpe de Colisão Aquecido",
				de: "Hitze Tackle"
			},
			effect: {
				en: "This Pokémon does 50 damage to itself.",
				fr: "Ce Pokémon s’inflige 50 dégâts.",
				es: "Este Pokémon se hace 50 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 50 danni a se stesso.",
				pt: "Este Pokémon causa 50 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 50 Schadenspunkte zu."
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



}

export default card
