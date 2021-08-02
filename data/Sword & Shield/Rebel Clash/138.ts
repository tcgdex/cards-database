import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Duraludon",
		fr: "Duralugon",
		es: "Duraludon",
		it: "Duraludon",
		pt: "Duraludon",
		de: "Duraludon"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Metal Sharpener",
				fr: "Affuteur de Métal",
				es: "Afilador de Metales",
				it: "Affilametallo",
				pt: "Amolador de Metal",
				de: "Metallschleifer"
			},
			effect: {
				en: "Attach a Metal Energy card from your discard pile to 1 of your Pokémon.",
				fr: "Attachez une carte Énergie Metal de votre pile de défausse à l’un de vos Pokémon.",
				es: "Une 1 carta de Energía Metal de tu pila de descartes a 1 de tus Pokémon.",
				it: "Assegna a uno dei tuoi Pokémon una carta Energia Metal dalla tua pila degli scarti.",
				pt: "Ligue 1 carta de Energia Metal da sua pilha de descarte a 1 dos seus Pokémon.",
				de: "Lege 1 Metal-Energiekarte aus deinem Ablagestapel an 1 deiner Pokémon an."
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Power Beam",
				fr: "Puissant Rayon",
				es: "Rayo de Luz Poderoso",
				it: "Raggiopotenza",
				pt: "Raio de Poder",
				de: "Power-Strahl"
			},

			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 2,
	hp: 130,
	types: ["Metal"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card
