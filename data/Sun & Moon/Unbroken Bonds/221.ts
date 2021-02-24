import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Marshadow & Machamp-GX",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		68,
	],
	hp: 270,
	types: [
		"Fightning",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Revenge",
			},
			effect: {
				en: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during their last turn, this attack does 90 more damage.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Hundred-Blows Impact",
			},

			damage: 160,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Acme of Heroism-GX",
			},
			effect: {
				en: "If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), and if it would be Knocked Out by damage from an opponent's attack during their next turn, it is not Knocked Out, and its remaining HP becomes 10. (You can't use more than 1 GX attack in a game.)",
			},
			damage: 200,

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
