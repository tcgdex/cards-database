import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Manectric",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		310,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Electrike",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lightning Twister",
			},
			effect: {
				en: "Does 20 damage times the number of basic Energy cards attached to Manectric.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Chain Lightning",
			},
			effect: {
				en: "Does 20 damage to each of your opponent's Benched Pokémon that is the same type as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
