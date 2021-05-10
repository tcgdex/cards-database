import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Eternatus VMAX",
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 340,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Eternatus V",
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Eternal Zone",
			},
			effect: {
				en: "If all of your Pokémon in play are Darkness type, you can have up to 8 Pokémon on your Bench, and you can’t put non-Darkness Pokémon into play. (If this Ability stops working, discard Pokémon from your Bench until you have 5.)",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dread End",
			},
			effect: {
				en: "This attack does 30 damage for each of your Darkness Pokémon in play.",
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
