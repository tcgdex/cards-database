import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	dexId: [517],

	description: {
		'en-us': "It eats the dreams of people and Pokémon. When it eats a pleasant dream, it expels pink-colored mist."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Yawn",
			'fr-fr': "Bâillement"
		},

		effect: {
			'en-us': "The Defending Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Défenseur est maintenant Endormi."
		}
	}],

	name: {
		'en-us': "Munna",
		'fr-fr': "Munna"
	},

	rarity: "None",
	hp: 60,
	types: ["Psychic"],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 281796,
				tcgplayer: 87642
			}
		}
	]
}

export default card

