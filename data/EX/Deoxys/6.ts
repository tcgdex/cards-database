import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Crawdaunt",
	},
	illustrator: "Tomoko Wakai",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		342,
	],
	hp: 70,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Corphish",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dark Protection",
			},
			effect: {
				en: "Any damage done to Crawdaunt by your opponent's attacks is reduced by 10 for each Darkness Energy attached to Crawdaunt (after applying Weakness and Resistance). You can't reduce more than 20 damage in this way.",
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
				en: "Bubblebeam",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cross-Cut",
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 40 damage plus 20 more damage.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
