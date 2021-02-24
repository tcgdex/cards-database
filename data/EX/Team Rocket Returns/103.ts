import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Rocket's Sneasel ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		215,
	],
	hp: 90,
	types: [
		"Darkness",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Drag Off",
			},
			effect: {
				en: "Before doing damage, you may switch 1 of your opponent's Benched Pokémon with the Defending Pokémon. If you do, this attack does 10 damage to the new Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Ring",
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each of your Darkness Pokémon in play.\"",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
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
