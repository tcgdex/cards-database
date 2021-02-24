import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Ludicolo",
	},
	illustrator: "Ken Sugimori",
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
				en: "Happy Dance",
			},
			effect: {
				en: "Once during your turn (before your attack), you may remove 1 damage counter from each of your Pokémon. You can't use more than 1 Happy Dance Poké-Power each turn. This power can't be used if Ludicolo is affected by a Special Condition.",
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
				en: "Water Punch",
			},
			effect: {
				en: "Flip a coin for each Water Energy attached to Ludicolo. This attack does 40 damage plus 20 more damage for each heads.",
			},
			damage: 40,

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
