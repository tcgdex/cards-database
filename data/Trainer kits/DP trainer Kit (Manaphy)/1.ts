import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Manaphy)'

const card: Card = {
	dexId: [418],
	set: Set,

	name: {
		en: "Buizel"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 60,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Splash About"
			},
			effect: {
				en: "If Buizel has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 10 more damage."
			},
			damage: "10+"
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "10+"
		}
	],

	description: {
		en: "It has a flotation that is like an inflatable collar. It floats on water with its head out."
	},

	retreat: 1
}

export default card
