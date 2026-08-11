import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		'en-us': "Growlithe",
		'fr-fr': "Caninos",
		'es-es': "Growlithe",
		'it-it': "Growlithe",
		'pt-br': "Growlithe",
		'de-de': "Fukano"
	},

	illustrator: "Narumi Sato",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [58],

	hp: 80,

	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'en-us': "Warm Up",
			},
			effect: {
				'en-us': "Search your deck for a Fire Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck."
			}
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				'en-us': "Combustion",
			},
			damage: 30,
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670469,
				tcgplayer: 281503
			}
		}
	]
}

export default card

