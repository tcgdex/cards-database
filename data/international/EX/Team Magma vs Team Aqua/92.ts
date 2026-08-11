import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Raikou ex",
		'fr-fr': "Raikou ex",
		'de-de': "Raikou ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [243],

	hp: 100,

	stage: "Basic",
	types: [
		"Lightning"
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Dazzle Blast",
				'fr-fr': "Explosion de lumière",
				'de-de': "Dazzle Blast"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Lightning Tackle",
				'fr-fr': "Charge éclair",
				'de-de': "Lightning Tackle"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Raikou ex does 20 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Raikou ex s'inflige 20 dégâts.",
				'de-de': "Flip a coin. If tails, Raikou ex does 20 damage to itself."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88540,
				cardmarket: 276069
			}
		}
	]
}

export default card
