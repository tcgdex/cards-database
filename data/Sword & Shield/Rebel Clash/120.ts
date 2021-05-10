import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Mandibuzz",
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Vullaby",
	},

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Bone Rush",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 damage for each heads.",
			},
			damage: "30×",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Blindside",
			},
			effect: {
				en: "This attack does 100 damage to 1 of your opponent’s Pokémon that has any damage counters on it. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
