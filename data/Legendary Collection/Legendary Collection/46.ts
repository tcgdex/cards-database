import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Haunter"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [93],

	hp: 50,

	types: [
		"Psychic"
	],

	evolveFrom: {
		en: "Gastly"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Transparency"
			},
			effect: {
				en: "Whenever an attack does anything to Haunter, flip a coin. If heads, prevent all effects of that attack, including damage, done to Haunter. This power stops working while Haunter is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Nightmare"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		en: "Because of its ability to slip through block walls, it is said to be from another dimension."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274811,
				tcgplayer: 86022
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86022,
				cardmarket: 274811
			}
		}
	],

	retreat: 0
}

export default card
