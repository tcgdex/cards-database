import { Card } from 'models/database/card'
import Set from '../Pokémon Futsal 2020'

const card: Card = {
	dexId: [810],
	set: Set,

	name: {
		'en-us': "Grookey on the Ball"
	},

	illustrator: "Illus. & Direc. The Pokémon Company Art Team",
	rarity: "None",
	category: "Pokemon",

	description: {
		'en-us': "When it uses its special stick to strike up a beat, the sound waves produced carry revitalizing energy to the plants and flowers in the area."
	},

	hp: 60,

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Tenacious Defense"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat."
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'en-us': "Razor Leaf"
		},

		damage: 50
	}],

	regulationMark: "D",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 506940,
				tcgplayer: 227413
			}
		},
	],
}

export default card
