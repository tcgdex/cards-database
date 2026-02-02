import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2014'

const card: Card = {
	dexId: [
		650,
	],
	set: Set,
	illustrator: '5ban Graphics',
	category: "Pokemon",
	description: {
		en: "The quills on its head are usually soft. When it flexes them, the points become so hard and sharp that they can pierce rock.",
	},
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},
	name: {
		en: "Chespin",
		fr: "Marisson",
	},
	rarity: "None",
	
	hp: 60,
	types: [
		"Grass",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 110407,
	},
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Vine Whip",
				fr: "Fouet Lianes",
			},
			damage: "10",
		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Seed Bomb",
				fr: "Canon Graine",
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		
	],
	retreat: 1,
}

export default card
