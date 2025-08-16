import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Alolan Sandshrew",
		fr: "Sabelette d’Alola",
		es: "Sandshrew de Alola",
		it: "Sandshrew di Alola",
		pt: "Sandshrew de Alola",
		de: "Alola-Sandan"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		27,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Run Around",
				fr: "Course Effrénée",
				es: "Correr Alrededor",
				it: "Correre Intorno",
				pt: "Zoar",
				de: "Herumrennen"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
				es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Scambia questo Pokémon con uno della tua panchina.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Claw",
				fr: "Griffe Acier",
				es: "Garra Metal",
				it: "Ferrartigli",
				pt: "Garra de Metal",
				de: "Metallklaue"
			},

			damage: 20,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 408334,
		tcgplayer: 201181
	}
}

export default card
