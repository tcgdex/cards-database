import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Mantine",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		226,
	],
	hp: 80,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Jumbo Fin",
			},
			effect: {
				en: "If Mantyke is anywhere under Mantine, the Retreat Cost for each of your Water Pokémon is ColorlessColorless less.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Giant Wave",
			},
			effect: {
				en: "Mantine can't use Giant Wave during your next turn.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
