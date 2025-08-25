import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Emolga",
		fr: "Emolga",
		es: "Emolga",
		it: "Emolga",
		pt: "Emolga",
		de: "Emolga"
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
				es: "Capturaenergía",
				it: "Cattura Energia",
				pt: "Captura de Energia",
				de: "Energieschnapper"
			},
			effect: {
				en: "Put 3 basic Energy cards from your discard pile into your hand.",
				fr: "Ajoutez 3 cartes Énergie de base de votre pile de défausse à votre main.",
				es: "Pon 3 cartas de Energía Básica de tu pila de descartes en tu mano.",
				it: "Prendi tre carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				pt: "Coloque 3 cartas de Energia básica da sua pilha de descarte na sua mão.",
				de: "Nimm 3 Basis-Energiekarten aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Volt Switch",
				fr: "Change Éclair",
				es: "Voltiocambio",
				it: "Invertivolt",
				pt: "Troca Elétrica",
				de: "Voltwechsel"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Lightning Pokémon.",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon Lightning de Banc.",
				es: "Cambia este Pokémon por 1 de tus Pokémon Lightning en Banca.",
				it: "Scambia questo Pokémon con un Pokémon Lightning della tua panchina.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon Lightning no Banco.",
				de: "Tausche dieses Pokémon gegen 1 Lightning-Pokémon auf deiner Bank aus."
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

	thirdParty: {
		cardmarket: 311885,
		tcgplayer: 149058
	}
}

export default card
