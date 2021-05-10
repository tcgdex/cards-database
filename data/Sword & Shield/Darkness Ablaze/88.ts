import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Tyranitar",
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 180,

	types: [
		"Fightning",
	],

	evolveFrom: {
		en: "Pupitar",
	},

	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bedrock Breaker",
			},
			effect: {
				en: "Discard a Stadium in play.",
			},
			damage: 120,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mountain Swing",
			},
			effect: {
				en: "Discard the top 5 cards of your deck.",
			},
			damage: 250,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D"
}

export default card
