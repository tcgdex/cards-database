import { Card } from 'models/database/card'
import Set from '../Pokémon Futsal 2020'

const card: Card = {
	dexId: [813],
	set: Set,

	name: {
		'en-us': "Scorbunny on the Ball"
	},

	illustrator: "Illus. & Direc. The Pokémon Company Art Team",
	rarity: "None",
	category: "Pokemon",

	description: {
		'en-us': "A warm-up of running around gets fire energy coursing through this Pokémon's body. Once that happens, it's ready to fight at full power."
	},

	hp: 60,

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Fiery Dribbling"
		},

		damage: "20×",

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 20 damage for each heads."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Reckless Charge"
		},

		damage: 30,

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself."
		}
	}],

	regulationMark: "D",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 569468,
				tcgplayer: 248016
			}
		},
	],
}

export default card
