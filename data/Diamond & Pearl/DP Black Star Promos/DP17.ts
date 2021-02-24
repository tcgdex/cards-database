import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Dialga",
	},
	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		483,
	],
	hp: 120,
	types: [
		"Metal",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Time Skip",
			},
			effect: {
				en: "Once during your turn (before your attack), you may have your opponent flip 2 coins. If both of them are heads, your turn ends. If both of them are tails, after your opponent draws a card at the beginning of his or her next turn, his or her turn ends. This power can't be used if Dialga is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Metal Flash",
			},
			effect: {
				en: "During your next turn, Dialga can't use Metal Flash.",
			},
			damage: 80,

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
