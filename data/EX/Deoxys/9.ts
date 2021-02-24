import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Jirachi",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		385,
	],
	hp: 60,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Wishing Star",
			},
			effect: {
				en: "Once during your turn (before your attack), if Jirachi is your Active Pokémon, you may look at the top 5 cards of your deck, choose 1 of them, and put it into your hand. Shuffle your deck afterward. Jirachi and your other Active Pokémon, if any, are now Asleep. This power can't be used if Jirachi is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metallic Blow",
			},
			effect: {
				en: "If the Defending Pokémon has any Poké-Bodies, this attack does 20 damage plus 30 more damage.",
			},
			damage: 20,

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
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
