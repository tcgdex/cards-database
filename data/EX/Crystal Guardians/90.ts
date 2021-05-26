import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Blaziken ex",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		257,
	],
	hp: 150,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Combusken",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Drag Off",
			},
			effect: {
				en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. Your opponent chooses the Defending Pok��mon to switch.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Burn Away",
			},
			effect: {
				en: "Before doing damage, count the remaining HP of the Defending Pokémon. If that Pokémon is Knocked Out by this attack, Blaziken ex does damage to itself equal to this attack's damage minus the remaining HP of the Defending Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
