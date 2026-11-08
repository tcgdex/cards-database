import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Venusaur EX",
		'fr-fr': "Florizarre-EX",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		3,
	],

	hp: 180,

	types: [
		"Grass",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Frog Hop",
				'fr-fr': "Bond de Grenouille",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: "40+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Impact",
				'fr-fr': "Impact Poison",
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Asleep and Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi et Empoisonné.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 288421,
		tcgplayer: 113659
	}
}

export default card
