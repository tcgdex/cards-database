import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Sabrina's Gastly"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [92],

	hp: 30,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Lick"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Fade Out"
			},
			effect: {
				en: "Return Sabrina's Gastly and all Energy cards attached to it to your hand. (Discard all other cards attached to Sabrina's Gastly.)"
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88871,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 88871,
				cardmarket: 274364
			}
		},
	],
	retreat: 0
}

export default card
