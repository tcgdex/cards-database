import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2014'

const card: Card = {
	dexId: [
		656,
	],
	set: Set,
	illustrator: '5ban Graphics',
	description: {
		en: "It secretes flexible bubbles from its chest and back. The bubbles reduce the damage it would otherwise take when attacked."
	},
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},
	name: {
		en: "Froakie",
		fr: "Grenousse",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Water",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110409,
	},
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Pound",
				fr: "Écras'Face",
			},
			damage: "10",
		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Drip",
				fr: "Goutte à Goutte",
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		
	],
	retreat: 1,

}

export default card
