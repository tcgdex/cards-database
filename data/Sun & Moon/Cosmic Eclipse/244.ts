import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Gallade",
		fr: "Gallame",
		es: "Gallade",
		it: "Gallade",
		pt: "Gallade",
		de: "Galagladi"
	},

	illustrator: "Huang Tzu En",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		475,
	],

	hp: 160,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Double Type",
				fr: "Type Double",
				es: "Doble Tipo",
				it: "Doppio Tipo",
				pt: "Tipo Duplo",
				de: "Doppeltyp"
			},
			effect: {
				en: "As long as this Pokémon is in play, it is Psychic and Fighting type.",
				fr: "Tant que ce Pokémon est en jeu, il est de type Psychic et Fighting.",
				es: "Mientras este Pokémon esté en juego, es de tipo Psychic y Fighting.",
				it: "Fintanto che questo Pokémon è in gioco, è di tipo Psychic e Fighting.",
				pt: "Enquanto este Pokémon estiver em jogo, é do tipo Psychic e Fighting.",
				de: "Solang dieses Pokémon im Spiel ist, ist es vom Typ Psychic und Fighting."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Cyclone",
				fr: "Cyclone d’Énergie",
				es: "Ciclón Poderoso",
				it: "Ciclone Potente",
				pt: "Ciclone Poderoso",
				de: "Kraftwirbel"
			},
			effect: {
				en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie de ce Pokémon vers l’un de vos Pokémon de Banc.",
				es: "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
				it: "Sposta un’Energia da questo Pokémon a uno di quelli nella tua panchina.",
				pt: "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
				de: "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 398549
	}
}

export default card
