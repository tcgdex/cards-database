import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Emolga",
		fr: "Emolga",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		587,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Catch",
				fr: "Attrape-Énergie",
			},
			effect: {
				en: "Put 3 basic Energy cards from your discard pile into your hand.",
				fr: "Ajoutez 3 cartes Énergie de base de votre pile de défausse à votre main.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Volt Switch",
				fr: "Change Éclair",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Lightning Pokémon.",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon Lightning de Banc.",
			},
			damage: 30,

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
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
