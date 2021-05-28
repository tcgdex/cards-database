import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Manectric",
	},
	illustrator: "K. Utsunomiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		310,
	],
	hp: 70,
	types: [
		"Lightning",
		"Darkness",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Power Shift",
			},
			effect: {
				en: "Once during your turn (before your attack), you may move any number of basic Energy cards attached to 1 of your Pokémon with Team Aqua in its name to another of your Pokémon. This power can't be used if Team Aqua's Manectric is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunderspark",
			},
			effect: {
				en: "Does 10 damage to each Benched Pokémon (yours and your opponent's) that has Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],




}

export default card
