import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Poochyena",
		'fr-fr': "Medhyena de Team Magma",
		'de-de': "Team Magmas Fiffyen"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [261],

	hp: 40,

	types: [
		"Darkness"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Snarl",
				'fr-fr': "Grondement féroce",
				'de-de': "Snarl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage to the Defending Pokémon. If tails, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts au Pokémon Défenseur. Si c'est pile, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, this attack does 10 damage to the Defending Pokémon. If tails, the Defending Pokémon is now Paralyzed."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275842,
				tcgplayer: 89838
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275842,
				tcgplayer: 89838
			}
		},
	],

}

export default card
