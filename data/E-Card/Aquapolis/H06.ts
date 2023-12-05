import { Card } from "../../../interfaces"
import Set from "../Aquapolis"

const card: Card = {
	set: Set,

	name: {
		de: "Heiteira"
	},

	abilities: [{
		type: 'Poke-POWER',
		name: {
			de: "Happy Healing"
		},

		effect: {
			de: "Once during your turn (before your attack), choose 1 of your Benched Pokémon and flip a coin. If heads, count the number of Energy attached to Blissey and then remove that many damage counters from the chosen Benched Pokémon. This power can't be used if Blissey is affected by a Special Condition."
		}
	}],

	attacks: [{
		name: {
			de: "Smash Bomber"
		},

		damage: 50,

		effect: {
			de: "Flip a coin. If tails, this attack does nothing."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}]
}

export default card
