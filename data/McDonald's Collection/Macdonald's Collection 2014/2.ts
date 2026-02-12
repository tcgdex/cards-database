import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2014'

const card: Card = {
	dexId: [
		650,
	],
	set: Set,
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
	category: "Pokemon",
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
				fr: "Canon Graine",
			},
			damage: "20",
		},
	],
}

export default card
