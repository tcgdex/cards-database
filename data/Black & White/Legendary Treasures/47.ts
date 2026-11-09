import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		de: "Plusle",
		en: "Plusle",
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		311,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tag Draw",
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 4 cards. If Minun is on your Bench, draw 4 more cards.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Positive Ion",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It cheers on friends with pom-poms made of sparks. It drains power from telephone poles.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 281198,
				tcgplayer: 88174
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 281198,
				tcgplayer: 88174
			}
		},
	],
}

export default card
