import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2014'

const card: Card = {
	dexId: [
		661,
	],
	illustrator: "5ban Graphics",
	description: {
		'en-us': "These friendly Pokémon send signals to one another with beautiful chirps and tail-feather movements."
	},
	set: Set,
	name: {
		'en-us': "Fletchling",
		'fr-fr': "Passerouge",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 50,
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
				'en-us': "Razor Wind",
				'fr-fr': "Coupe-Vent",
			},
			damage: "20",
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 1,
	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281663,
				tcgplayer: 110416
			}
		}
	]
}

export default card

