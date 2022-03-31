import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Tangela",
		fr: "Saquedeneu",
		es: "Tangela",
		it: "Tangela",
		pt: "Tangela",
		de: "Tangela"
	},
	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		114,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Absorb",
				fr: "Vol-Vie",
				es: "Absorber",
				it: "Assorbimento",
				pt: "Absorção",
				de: "Absorber"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
				es: "Cura 20 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 20 danni.",
				pt: "Cure 20 de danos deste Pokémon.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Vine Whip",
				fr: "Fouet Lianes",
				es: "Látigo Cepa",
				it: "Frustata",
				pt: "Chicote de Vinha",
				de: "Rankenhieb"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
