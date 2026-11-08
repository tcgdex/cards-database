import { Card } from 'models/database/card'
import Set from '../Pokémon Futsal 2020'

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Pikachu on the Ball"
	},

	illustrator: "Illus. & Direc. The Pokémon Company Art Team",
	rarity: "None",
	category: "Pokemon",

	description: {
		'en-us': "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy."
	},

	hp: 60,

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tail Whap"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Lightning Shot"
		},

		damage: 120,

		effect: {
			'en-us': "Flip a coin. If tails, this attack does nothing."
		}
	}],

	regulationMark: "D",


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
				cardmarket: 506930,
				tcgplayer: 223761
			}
		},
	],
}

export default card
