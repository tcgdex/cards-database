import { Card } from 'models/database/card'
import Set from '../Pokémon Futsal 2020'

const card: Card = {
	dexId: [816],
	set: Set,

	name: {
		'en-us': "Sobble on the Ball"
	},

	illustrator: "Illus. & Direc. The Pokémon Company Art Team",
	rarity: "None",
	category: "Pokemon",

	description: {
		'en-us': "When scared, this Pokémon cries. Its tears pack the chemical punch of 100 onions, and attackers won't be able to resist weeping."
	},

	hp: 60,

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Spectacular Save"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to this Pokémon."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Rain Splash"
		},

		damage: 20
	}],

	regulationMark: "D",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574871,
				tcgplayer: 248015
			}
		},
	],
}

export default card
