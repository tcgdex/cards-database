import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Emolga",
		'fr-fr': "Emolga",
		'es-es': "Emolga",
		'it-it': "Emolga",
		'pt-br': "Emolga",
		'de-de': "Emolga"
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
				'en-us': "Energy Catch",
				'fr-fr': "Attrape-Énergie",
				'es-es': "Capturaenergía",
				'it-it': "Cattura Energia",
				'pt-br': "Captura de Energia",
				'de-de': "Energieschnapper"
			},
			effect: {
				'en-us': "Put 3 basic Energy cards from your discard pile into your hand.",
				'fr-fr': "Ajoutez 3 cartes Énergie de base de votre pile de défausse à votre main.",
				'es-es': "Pon 3 cartas de Energía Básica de tu pila de descartes en tu mano.",
				'it-it': "Prendi tre carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				'pt-br': "Coloque 3 cartas de Energia básica da sua pilha de descarte na sua mão.",
				'de-de': "Nimm 3 Basis-Energiekarten aus deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Volt Switch",
				'fr-fr': "Change Éclair",
				'es-es': "Voltiocambio",
				'it-it': "Invertivolt",
				'pt-br': "Troca Elétrica",
				'de-de': "Voltwechsel"
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Lightning Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec l’un de vos Pokémon Lightning de Banc.",
				'es-es': "Cambia este Pokémon por 1 de tus Pokémon Lightning en Banca.",
				'it-it': "Scambia questo Pokémon con un Pokémon Lightning della tua panchina.",
				'pt-br': "Troque este Pokémon por 1 dos seus Pokémon Lightning no Banco.",
				'de-de': "Tausche dieses Pokémon gegen 1 Lightning-Pokémon auf deiner Bank aus."
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

	description: {
		'en-us': "It glides using its cape-like membrane. Electrical energy scatters from it, shocking its friends and foes alike.",
	},

	thirdParty: {
		cardmarket: 311885,
		tcgplayer: 149058
	}
}

export default card
