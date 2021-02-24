import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Sudowoodo",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		185,
	],
	hp: 80,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sidestep",
			},
			effect: {
				en: "If Bonsly is anywhere under Sudowoodo, flip a coin. If heads, prevent all effects of an attack, including damage, done to Sudowoodo during your opponent's next turn.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Persuade",
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon. The new Defending Pokémon can't retreat during your opponent's next turn.",
			},
			damage: 30,

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
