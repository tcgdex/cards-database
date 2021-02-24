import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Sceptile",
	},
	illustrator: "Reiko Tanoue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		254,
	],

	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Grovyle",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Green Breath",
			},
			effect: {
				en: "When you attach a Grass Energy card from your hand to Sceptile, remove 2 damage counters from Sceptile.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leaf Blast",
			},
			effect: {
				en: "Does 20 damage times the amount of Grass Energy attached to Sceptile.",
			},
			damage: "20x",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Claws",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
