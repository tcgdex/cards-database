import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2017'

const card: Card = {
	dexId: [
		789,
	],
	set: Set,
	variants: [
		{ type: 'holo', size: 'standard' }
	],
	name: {
		en: "Cosmog",
		fr: "Cosmog",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Psychic",
	],
	stage: "Basic",
	thirdParty: {
		tcgplayer: 152686,
	},
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Ramasse Poussière",
			},
			effect: {
				fr: "Piochez une carte.",
			},
		},
	],
}

export default card
