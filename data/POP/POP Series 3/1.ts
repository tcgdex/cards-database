import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Blastoise",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		9,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Wartortle",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smash Turn",
			},
			effect: {
				en: "After your attack, you may switch Blastoise with 1 of your Benched Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rocket Tackle",
			},
			effect: {
				en: "Blastoise does 10 damage to itself. Flip a coin. If heads, prevent all damage done to Blastoise by attacks during your opponent’s next turn.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning"
		},
	],

	retreat: 2,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
