import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Noctowl",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		164,
	],
	hp: 60,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Hoothoot",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Glaring Gaze",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, look at your opponent's hand. If your opponent has any Trainer cards there, choose 1 of them. Your opponent shuffles that card into his or her deck. This power can't be used if Noctowl is Asleep, Confused, or Paralyzed.",
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
				en: "Wing Attack",
			},

			damage: 30,

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




}

export default card
