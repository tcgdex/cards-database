import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2018'

const card: Card = {
	dexId: [147],
	set: Set,

	name: {
		en: "Dratini"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Signs of Evolution",
			},
			effect: {
				en: "Search your deck for a Dratini, a Dragonair, and a Dragonite. reveal them, and put them into your hand. Then, shuffle your deck."
			},
		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Tail Smack",
			},
			damage: 10,
		}
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		}
	],

	retreat: 2,

	illustrator: "Naoya Kimura",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 366777,
				tcgplayer: 180457
			}
		}
	]
}

export default card

