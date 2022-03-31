import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Alomomola",
		fr: "Mamanbo",
		es: "Alomomola",
		it: "Alomomola",
		pt: "Alomomola",
		de: "Mamolida"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		594,
	],
	hp: 100,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Super Deep Dive",
				fr: "Super Gros Plongeon",
				es: "Superzambullida Submarina",
				it: "Super Immersione",
				pt: "Mergulho Super Profundo",
				de: "Super Tieftaucher"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon. Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon. Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				es: "Cura 30 puntos de daño a este Pokémon. Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Cura questo Pokémon da 30 danni. Scambia questo Pokémon con uno della tua panchina.",
				pt: "Cure 30 de danos deste Pokémon. Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon. Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				es: "Surf",
				it: "Surf",
				pt: "Surfar",
				de: "Surfer"
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
