import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Shining Mewtwo",
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
				"Psychic",
			],
			name: {
				en: "Reflect Shield",
			},
			effect: {
				en: "If an attack does damage to Shining Mewtwo during your opponent's next turn (even if Shining Mewtwo is Knocked Out), flip a coin. If heads, prevent all damage done to Shining Mewtwo from that attack (any other effects of attacks still happen) and do 20 damage to the attacking Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Fire",
			],
			name: {
				en: "Psyburst",
			},
			effect: {
				en: "Discard a Energy card attached to Shining Mewtwo or this attack does nothing. This attack does 40 damage plus 10 damage for each Energy attached to the Defending Pokémon.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
