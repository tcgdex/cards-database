import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Machop",
		'fr-fr': "Machoc",
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		66,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Knuckle Punch",
				'fr-fr': "Coud'Phalange",
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It hefts a Graveler repeatedly to strengthen its entire body. It uses every type of martial arts.",
	},

	thirdParty: {
		cardmarket: 288478,
		tcgplayer: 113698
	}
}

export default card
