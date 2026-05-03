import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2021'

const card: Card = {
	dexId: [816],
	name: {
		en: "Sobble",
		fr: "Larméléon",
	},

	illustrator: "Mizue",
	rarity: "None",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Bind",
				fr: "Étreinte",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
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

	retreat: 1,

	description: {
		en: "When scared, this Pokémon cries. Its tears pack the chemical punch of 100 onions, and attackers won’t be able to resist weeping."
	},
	variants: [
		{
			type: 'normal',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 539008,
				tcgplayer: 232338
			}
		},
		{
			type: 'holo',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 539013,
				tcgplayer: 232338
			}
		}
	]
}

export default card

