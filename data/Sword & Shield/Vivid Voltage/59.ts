import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Eelektross",
	},
	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 160,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Eelektrik",
	},



	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Electrified Bite Mark",
			},
			effect: {
				en: "During your opponent’s next turn, if they attach an Energy card from their hand to the Defending Pokémon, put 6 damage counters on that Pokémon.",
			},
			damage: 60,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electro Sprinkler",
			},
			effect: {
				en: "This attack also does 30 damage to 1 of your Benched Pokémon and 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
