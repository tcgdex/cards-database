import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Dratini",
		fr: "Minidraco",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Slap",
				fr: "Coud'keu",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slam",
				fr: "Souplesse",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		fr: "On l'appelle \"Pokémon mirage\" en raison de sa rareté. On a découvert sa mue."
	}
}

export default card
