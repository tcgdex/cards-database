import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Dusclops ex",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		356,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Duskull",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dark Hole",
			},
			effect: {
				en: "As long as Dusclops ex is on your Bench, don't apply Darkness Weakness for all of your Pokémon in play.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Shadow Beam",
			},
			effect: {
				en: "Put 2 damage counters on the Defending Pokémon for each Energy attached to Dusclops ex.",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
		{
			type: "Colorless",
			value: "-30"
		},
	],




}

export default card
