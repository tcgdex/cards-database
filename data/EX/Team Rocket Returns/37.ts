import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Houndoom",
	},
	illustrator: "Nakaoka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		229,
	],
	hp: 70,
	types: [
		"Fire",
		"Darkness",
	],
	evolveFrom: {
		en: "Houndour",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Fire Breath",
			},
			effect: {
				en: "Once during your turn (before your attack), if Dark Houndoom is your Active Pokémon, you may flip a coin. If heads, the Defending Pokémon (choose 1 if there are 2) is now Burned. This power can't be used if Dark Houndoom is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Payback",
			},
			effect: {
				en: "If you have less Benched Pokémon than your opponent, this attack does 40 damage plus 20 more damage.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
