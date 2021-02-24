import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Furret",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		162,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Sentret",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Scavenger Hunt",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put 2 cards from your hand into your deck. Then search your deck for an Energy card, show it to your opponent, and put it in your hand. Shuffle your deck afterward. This power can't be used if Furret is affected by a Special Condition.",
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
				en: "Spinning Attack",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
