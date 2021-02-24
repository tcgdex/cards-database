import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Machamp",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		68,
	],
	hp: 120,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Machoke",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Terraforming",
			},
			effect: {
				en: "Once during your turn (before you attack), you may look at the top 4 cards of your deck and rearrange them as you like. This power can't be used if Machamp is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Iron Fist",
			},
			effect: {
				en: "Count the number of Pokémon you have in play with damage counters on them. Flip a coin. If heads, this attack does 50 damage plus 10 more damage for each of those Pokémon.",
			},
			damage: 50,

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
