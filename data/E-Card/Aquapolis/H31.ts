import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Vileplume",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		45,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Gloom",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Scent",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned and Confused. If tails, the Defending Pokémon is now Poisoned and Asleep.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Addictive Pollen",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play Supporter cards during his or her next turn.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
