import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Magearna-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		801,
	],
	hp: 160,
	types: [
		"Metal",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mystic Heart",
			},
			effect: {
				en: "Prevent all effects of your opponent's attacks, except damage, done to each of your Pokémon that has any Metal Energy attached to it. (Existing effects are not removed.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Soul Blaster",
			},
			effect: {
				en: "During your next turn, this Pokémon's Soul Blaster attack's base damage is 60.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
