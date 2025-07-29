import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Raikou",
		fr: "Raikou",
		es: "Raikou",
		it: "Raikou",
		pt: "Raikou",
		de: "Raikou"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		243,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Booming Thunder",
				fr: "Tonnerre Grondant",
				es: "Trueno Estridente",
				it: "Tuono Tonante",
				pt: "Trovão Estrepitoso",
				de: "Donnerbrüllen"
			},
			effect: {
				en: "Attach a Lightning Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie Lightning de votre pile de défausse à l’un de vos Pokémon de Banc.",
				es: "Une 1 carta de Energía Lightning de tu pila de descartes a 1 de tus Pokémon en Banca.",
				it: "Assegna a uno dei tuoi Pokémon in panchina una carta Energia Lightning dalla tua pila degli scarti.",
				pt: "Ligue 1 carta de Energia Lightning da sua pilha de descarte a 1 dos seus Pokémon no Banco.",
				de: "Lege 1 Lightning-Energiekarte aus deinem Ablagestapel an 1 Pokémon auf deiner Bank an."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electric Ball",
				fr: "Boule de Foudre",
				es: "Bola Eléctrica",
				it: "Lamposfera",
				pt: "Bola de Eletricidade",
				de: "Stromball"
			},

			damage: 90,

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

	retreat: 2,

	thirdParty: {
		cardmarket: 302170
	}
}

export default card
