import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Paras",
		fr: "Paras",
		de: "Paras",
		it: "Paras"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		46,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				de: "Kratzer",
				it: "Graffio"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Spore",
				fr: "Spore",
				de: "Pilzspore",
				it: "Spore"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das verteidigende Pokémon ist jetzt schlafend.",
				it: "Il Pokémon Difensore è Addormentato."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Burrows to suck tree roots. The mushrooms on its back grow by drawing nutrients from the bug host.",
		fr: "Les champignons sur son dos se nourrissent des nutriments de leur hôte insectoïde.",
		it: "Scava il terreno per succhiare liquidi dalle radici. I funghi sul suo dorso crescono assorbendo nutrimento dal bruco ospite."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273856,
				tcgplayer: 45162
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273856,
				tcgplayer: 45162
			}
		}
	],
}

export default card
