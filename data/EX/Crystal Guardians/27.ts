import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Swampert",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		260,
	],
	hp: 120,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Marshtomp",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Echo Draw",
			},
			effect: {
				en: "Once during your turn (before your attack), you may draw a card. This power can't be used if Swampert is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Hurl",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
