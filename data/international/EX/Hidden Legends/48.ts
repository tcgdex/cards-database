import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Spinda",
		'fr-fr': "Spinda",
		'de-de': "Pandir"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [327],

	hp: 60,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "The Hula-la",
				'fr-fr': "Danse-folle",
				'de-de': "The Hula-la"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, both the Defending Pokémon and Spinda are now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus. Si c'est pile, le Pokémon Défenseur et Spinda sont maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, both the Defending Pokémon and Spinda are now Confused."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flail",
				'fr-fr': "Fléau",
				'de-de': "Flail"
			},
			effect: {
				'en-us': "Does 10 damage times the number of damage counters on Spinda.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur Spinda.",
				'de-de': "Does 10 damage times the number of damage counters on Spinda."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89459,
				cardmarket: 276122
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89459,
				cardmarket: 276122
			}
		},
	]
}

export default card
