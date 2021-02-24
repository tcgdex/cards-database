import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Mightyena ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		262,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Poochyena",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Driving Howl",
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose 1 of the Defending Pokémon and switch it with 1 of your opponent's Benched Pokémon. Your opponent chooses the Benched Pokémon to switch. This power can't be used if Mightyena ex is affected by a Special Condition.",
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
				en: "Sharp Fang",
			},

			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Claws",
			},
			effect: {
				en: "If the Defending Pokémon is a Stage 2 Evolved Pokémon, this attack does 50 damage plus 40 more damage.",
			},
			damage: 50,

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
