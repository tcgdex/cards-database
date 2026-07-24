import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Lt. Surge's Fearow"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [22],

	hp: 70,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Spearow"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Repeating Drill"
			},
			effect: {
				en: "Flip 5 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Clutch"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
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
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 86854,
				cardmarket: 274143
			}
		}
	],
	retreat: 0
}

export default card
