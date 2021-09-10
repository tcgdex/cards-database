import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Pelipper",
		fr: "Bekipan",
		es: "Pelipper",
		it: "Pelipper",
		pt: "Pelipper",
		de: "Pelipper"
	},

	illustrator: "Eri Yamaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Wingull",
		fr: "Goélise"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-Ailes",
				es: "Ataque Ala",
				it: "Attacco d’Ala",
				pt: "Ataque de Asa",
				de: "Flügelschlag"
			},

			damage: 50,

		},
		{
			cost: [
				"Water",
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
			damage: 110,

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
			value: "-30"
		},
	],

	retreat: 2,
	hp: 120,
	types: ["Water"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It is a messenger of the skies, carrying small Pokémon and eggs to safety in its bill."
	}
}

export default card
