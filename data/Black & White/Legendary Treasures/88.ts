import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Darkrai-EX",
	},

	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		491,
	],

	hp: 180,

	types: [
		"Darkness",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dark Cloak",
			},
			effect: {
				en: "Each of your Pokémon that has any Darkness Energy attached to it has no Retreat Cost.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Night Spear",
			},
			effect: {
				en: "Does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 90,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2
}

export default card
