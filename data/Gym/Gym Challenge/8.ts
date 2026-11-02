import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Giovanni's Persian"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [53],

	hp: 60,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Meowth"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Call the Boss"
			},
			effect: {
				en: "When you play Giovanni's Persian from your hand, you may search your deck for the Trainer card named Giovanni, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ambush"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85724,
			},
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85724,
				cardmarket: 274276
			}
		},
	],
	retreat: 0
}

export default card
