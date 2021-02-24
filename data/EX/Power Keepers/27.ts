import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Cacturne",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		332,
	],
	hp: 70,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Cacnea",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Poison Structure",
			},
			effect: {
				en: "Once during your turn (before your attack), if Sidney's Stadium is in play, you may choose 1 of the Defending Pokémon. That Pokémon is now Poisoned. This power can't be used if Cacturne is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pin Missile",
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
