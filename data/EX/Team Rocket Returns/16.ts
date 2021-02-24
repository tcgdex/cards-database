import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Muk",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		89,
	],
	hp: 70,
	types: [
		"Grass",
		"Darkness",
	],
	evolveFrom: {
		en: "Grimer",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sticky Goo",
			},
			effect: {
				en: "As long as Dark Muk is your Active Pokémon, your opponent pays ColorlessColorless more to retreat his or her Active Pokémon.\"",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slimy Water",
			},
			effect: {
				en: "Does 10 damage times the number of Colorless Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost).\"",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Acidic Poison",
			},
			effect: {
				en: "The Defending Pokémon is now Burned and Poisoned.",
			},
			damage: 10,

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
