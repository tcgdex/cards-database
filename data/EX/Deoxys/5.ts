import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Claydol",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		344,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Baltoy",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Psychic Trace",
			},
			effect: {
				en: "Once during your turn (before your attack), if Claydol is your Active Pokémon, you may shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand. This power can't be used if Claydol is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ancient Mantra",
			},
			effect: {
				en: "If Claydol has any Psychic Energy attached to it, the Defending Pokémon is now Confused. If Claydol has any Fighting Energy attached to it, this attack does 20 damage plus 20 more damage.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
