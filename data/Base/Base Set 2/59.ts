import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Rhydon",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		112,
	],
	hp: 100,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Rhyhorn",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Attack",
			},

			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Ram",
			},
			effect: {
				en: "Rhydon does 20 damage to itself. If your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. (Do the damage before switching the Pokémon. Switch the Pokémon even if Rhydon is knocked out.)",
			},
			damage: 50,

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
			type: "Lightning",
			value: "-30"
		},
	],




}

export default card
