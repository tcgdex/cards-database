import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Victini",
		fr: "Victini",
		es: "Victini",
		it: "Victini",
		pt: "Victini",
		de: "Victini"
	},

	illustrator: "Teeziro",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [494],

	hp: 60,

	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				en: "Victory Dive",
			},
			effect: {
				en: "You may search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck."
			},
			damage: 30,
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670470,
				tcgplayer: 281493
			}
		}
	]
}

export default card

