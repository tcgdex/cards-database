import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Venusaur",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		3,
	],
	hp: 100,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Ivysaur",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Harvest Bounty",
			},
			effect: {
				en: "Once during your turn (before you attack), If you attach an Energy card from your hand to your Active Pokémon as part of your turn, you may attach an additional Energy card to that Pokémon at the same time. This power can't be used if Venusaur is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Body Slam",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
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





}

export default card
