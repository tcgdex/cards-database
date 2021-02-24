import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Feraligatr ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		160,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Croconaw",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Overpowering Fang",
			},
			effect: {
				en: "As long as Feraligatr ex is your Active Pokémon, each player's Pokémon (excluding Pokémon-ex) can't use any Poké-Powers or Poké-Bodies.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Tsunami",
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sore Spot",
			},
			effect: {
				en: "Does 70 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
