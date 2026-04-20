import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2018'

const card: Card = {
	dexId: [81],
	set: Set,

	name: {
		en: "Magnemite"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Searching Magnet",
			},
			effect: {
				en: "Search your deck for up to 3 Metal Energy cards, reveal them, and put them into your hand. Then, shuffle your deck."
			},
		},
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Tackle",
			},
			damage: 10,
		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],

	retreat: 1,

	illustrator: "MAHOU",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 366776,
				tcgplayer: 180456
			}
		}
	]
}

export default card

