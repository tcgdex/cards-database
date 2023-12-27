import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Zygarde",
		fr: "Zygarde",
		es: "Zygarde",
		it: "Zygarde",
		pt: "Zygarde",
		de: "Zygarde"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				es: "Mordisco",
				it: "Morso",
				pt: "Mordida",
				de: "Biss"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Power Blast",
				fr: "Violente Déflagration",
				es: "Estallido Vigoroso",
				it: "Forzacolpo",
				pt: "Explosão Poderosa",
				de: "Powerschuss"
			},
			effect: {
				en: "Discard a Fighting Energy from this Pokémon.",
				fr: "Défaussez une Énergie Fighting de ce Pokémon.",
				es: "Descarta 1 Energía Fighting de este Pokémon.",
				it: "Scarta un'Energia Fighting da questo Pokémon.",
				pt: "Descarte 1 Energia Fighting deste Pokémon.",
				de: "Lege 1 Fighting-Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "Some say it can change to an even more powerful form when battling those who threaten the ecosystem."
	}
}

export default card
