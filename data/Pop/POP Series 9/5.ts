import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Rotom",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		479,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Type Shift",
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this power. Rotom's type is Psychic until the end of your turn",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Poltergeist",
			},
			effect: {
				en: "Look at your opponent's hand. This attack does 30 damage plus 10 more damage for each Trainer, Supporter, and Stadium card in your opponent's hand.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],




}

export default card
