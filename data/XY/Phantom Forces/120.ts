import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "M Manectric EX",
		fr: "M-Élecsprint EX",
		es: "M-Manectric EX",
		it: "M Manectric EX",
		pt: "M-Manectric EX",
		de: "M Voltenso EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		310,
	],

	hp: 210,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Manectric-EX",
		fr: "Élecsprint-EX",
		es: "Manectric-EX",
		it: "Manectric-EX",
		pt: "Manectric-EX",
		de: "Voltenso-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Turbo Bolt",
				fr: "Éclair Turbo",
				es: "Turborrayo",
				it: "Turbobolide",
				pt: "Raio Turbinado",
				de: "Turboblitz"
			},
			effect: {
				en: "Attach 2 basic Energy cards from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
				es: "Une 2 cartas de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
				it: "Assegna a uno dei tuoi Pokémon in panchina due carte Energia base dalla tua pila degli scarti.",
				pt: "Ligue 2 cards de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				de: "Lege 2 Basis-Energiekarten von deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	suffix: "EX",
	retreat: 0
}

export default card
