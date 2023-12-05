import { Card } from "../../../interfaces"
import Set from "../Aquapolis"

const card: Card = {
	set: Set,

	name: {
		de: "Ariados"
	},

	abilities: [{
		type: 'Poke-BODY',
		name: {
			de: "Gluey Slime"
		},

		effect: {
			de: "As long as Ariados is in play, each player must pay an additional  to retreat his or her Active Pokémon. Gluey Slime can´t make a player pay more than an additional  to retreat a Pokémon, even if there is more than 1 Ariados in play."
		}
	}],

	attacks: [{
		name: {
			de: "Spider Force"
		},

		damage: "20+",

		effect: {
			de: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage. If tails, this attack does 20 damage and the Defending Pokémon is now Paralyzed."
		},

		cost: ["Grass", "Colorless"]
	}]
}

export default card
