import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Ludicolo",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		272,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Lombre",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Swing Dance",
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw a card. This power can't be used if Ludicolo is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Healing Steps",
			},
			effect: {
				en: "You may discard as many cards as you like from your hand. If you do, remove that many damage counters from Ludicolo.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Circular Steps",
			},
			effect: {
				en: "Does 10 damage times the number of Pokémon in play (both yours and your opponent's), excluding Ludicolo.",
			},
			damage: 10,

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
