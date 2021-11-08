import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Yanma",
		fr: "Yanma",
		es: "Yanma",
		it: "Yanma",
		pt: "Yanma",
		de: "Yanma"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "U-turn",
				fr: "Demi-Tour",
				es: "Ida y Vuelta",
				it: "Retromarcia",
				pt: "Fazer Retorno",
				de: "Kehrtwende"
			},
			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger ce Pokémon contre l'un de vos Pokémon de Banc.",
				es: "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Puoi scambiare questo Pokémon con uno della tua panchina.",
				pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cutting Wind",
				fr: "Vent Glacial",
				es: "Viento Helado",
				it: "Vento Tagliente",
				pt: "Vento Dilacerante",
				de: "Schneidender Wind"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "If it flaps its wings really fast, it can generate shock waves that will shatter windows in the area."
	}
}

export default card
