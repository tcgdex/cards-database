import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [513],

	name: {
		en: "Pansear",
		fr: "Flamajou",
		es: "Pansear",
		it: "Pansear",
		pt: "Pansear",
		de: "Grillmak"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Fire",
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Live Coal",
				fr: "Charbon Mutant",
				es: "Carbón Activado",
				it: "Carboni Ardenti",
				pt: "Carvão Vivo",
				de: "Glühende Kohlen"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
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

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
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
		en: "This Pokémon lives in caves in volcanoes. The fire within the tuft on its head can reach 600 degrees Fahrenheit."
	},

	thirdParty: {
		cardmarket: 483004
	}
}

export default card
