import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2014'

const card: Card = {
	dexId: [
		653,
	],
	illustrator: "5ban Graphics",
	set: Set,
	description: {
		en: "Eating a twig fills it with energy, and its roomy ears give vent to air hotter than 390 degrees Fahrenheit."
	},
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},
	name: {
		en: "Fennekin",
		fr: "Feunnec",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Fire",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110408,
	},
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
			},
			damage: "10",
		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Live Coal",
				fr: "Charbon Mutant",
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		
	],
	retreat: 1,
}

export default card
