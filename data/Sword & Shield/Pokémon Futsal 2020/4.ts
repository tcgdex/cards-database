import { Card } from '../../../interfaces'
import Set from '../Pokémon Futsal 2020'

const card: Card = {
	dexId: [813],
	set: Set,

	name: {
		en: "Scorbunny on the Ball"
	},

	illustrator: "The Pokémon Company Art Team",
	rarity: "None",
	category: "Pokemon",

	description: {
		en: "A warm-up of running around gets fire energy coursing through this Pokémon's body. Once that happens, it's ready to fight at full power."
	},
	
	hp: 60,

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Fiery Dribbling"
		},

		damage: "20×",

		effect: {
			en: "Flip a coin until you get tails. This attack does 20 damage for each heads."
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			en: "Reckless Charge"
		},

		damage: 30,

		effect: {
			en: "This Pokémon also does 10 damage to itself."
		}
	}],

	regulationMark: "D"
}

export default card