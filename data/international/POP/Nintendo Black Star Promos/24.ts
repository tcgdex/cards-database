import { Card } from 'models/database/card'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Chimecho",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		358,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Resonate",
			},
			effect: {
				'en-us': "Your opponent switches each Defending Pokémon with his or her Benched Pokémon. If your opponent has only 1 Benched Pokémon, you choose the Defending Pokémon to switch.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Healing Sound",
			},
			effect: {
				'en-us': "Remove 3 damage counters from each of your Active Pokémon. Each Defending Pokémon is now Asleep.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 84293
			}
		},
		{
			type: 'normal',
			stamp: ['winner'],
			thirdParty: {
				tcgplayer: 228153
			}
		}
	]
}

export default card
