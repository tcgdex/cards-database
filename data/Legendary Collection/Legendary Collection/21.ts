import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Butterfree"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [12],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Metapod"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Whirlwind"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any. (Do the damage before switching the Pokémon.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Mega Drain"
			},
			effect: {
				en: "Remove a number of damage counters from Butterfree equal of half the damage done to the Defending Pokémon (after applying Weakness and Resistance) (rounded up to the nearest 10). If Butterfree has fewer damage counters that that, remove all of them."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		en: "In battle, it flaps its wings at high speed to release highly toxic dust into the air."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274786,
				tcgplayer: 84062
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84062,
				cardmarket: 274786
			}
		}
	],

	retreat: 0
}

export default card
