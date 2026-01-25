import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2017'

const card: Card = {
	dexId: [
		725,
	],
	set: Set,
	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false,
	},
	name: {
		en: "Litten",
		fr: "Flamiaou",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Fire",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 152683,
	},
	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				fr: "Morsure",
			},
			damage: "10",
		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				fr: "Flamboiement",
			},
			damage: "20",
		},
	],
}

export default card
