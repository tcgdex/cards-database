import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Dark Dragonair",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		148,
	],
	hp: 60,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Dratini",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolutionary Light",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for an Evolution card. Show it to your opponent and put it into your hand. Shuffle your deck afterward. This power can't be used if Dark Dragonair is Asleep, Confused, or Paralyzed.",
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
				en: "Tail Strike",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage.",
			},
			damage: 20,

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
