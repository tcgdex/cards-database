import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	illustrator: "OKACHEKE",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [25],

	hp: 70,

	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'en-us': "Growl",
			},
			effect: {
				'en-us': "During your opponent's next turn, the Defending Pokémon's attacks do 20 less damage (before applying Weakness and Resistance)."
			}
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				'en-us': "Pika Bolt",
			},
			damage: 30,
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
			type: 'holo',
			thirdParty: {
				cardmarket: 725423,
				tcgplayer: 516517
			}
		}
	]
}

export default card

