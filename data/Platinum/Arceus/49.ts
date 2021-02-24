import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Wormadam Plant Cloak",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		413,
	],

	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Burmy Plant Cloak",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Magical Needle",
			},
			effect: {
				en: "Remove 2 damage counters from 1 of your Benched Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cloak Scale",
			},
			effect: {
				en: "If you have Wormadam Sandy Cloak in play, the Defending Pokémon is now Burned, Confused, and Poisoned.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
