import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Mawile",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		303,
	],
	hp: 60,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scam",
			},
			effect: {
				en: "Look at your opponent's hand. You may have your opponent shuffle a Supporter card you find there into his or her deck. If you do, your opponent draws a card.",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Hook",
			},
			effect: {
				en: "Before doing damage, you may switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. If you do, this attack does 20 damage to the new Defending Pokémon.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
