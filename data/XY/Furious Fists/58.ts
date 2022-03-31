import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Landorus",
		fr: "Démétéros",
		es: "Landorus",
		it: "Landorus",
		pt: "Landorus",
		de: "Demeteros"
	},
	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		645,
	],
	hp: 120,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Shout of Power",
				fr: "Cri de Puissance",
				es: "Grito de Poder",
				it: "Urlotonante",
				pt: "Grito de Poder",
				de: "Mächtiger Aufruf"
			},
			effect: {
				en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
				es: "Une 1 carta de Energía Básica de tu pila de descartes a 1 de tus Pokémon en Banca.",
				it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia base dalla tua pila degli scarti.",
				pt: "Ligue um card de Energia básica da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				de: "Lege 1 Basis-Energiekarte von deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Sky Lariat",
				fr: "Lasso Céleste",
				es: "Lazo Celestial",
				it: "Lazoaereo",
				pt: "Laço Celeste",
				de: "Sensensturz"
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
