import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Octillery",
	},
	illustrator: "Shin-ichi Yoshida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		224,
	],
	hp: 60,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Remoraid",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Ink Blast",
			},
			effect: {
				en: "This attack does 20 damage plus 10 more damage for each Energy attached to Dark Octillery but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Tentacle Wrap",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, during your opponent's next turn, your opponent pays more to retreat the Defending Pokémon.",
			},
			damage: 20,

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
