import { Card } from "../../../interfaces"
import Set from "../Aquapolis"

const card: Card = {
	set: Set,

	name: {
		de: "Psiana"
	},

	abilities: [{
		type: 'Poke-POWER',
		name: {
			de: "Energy Return"
		},

		effect: {
			de: "As often as you like during your turn (before your attack), choose an Energy card attached to 1 of your Pokémon and return it to your hand. This power can't be used if Espeon is affected by a Special Condition."
		}
	}],

	attacks: [{
		name: {
			de: "Damage Blast"
		},

		damage: "30+",

		effect: {
			de: "Flip a number of coins equal to the number of damage counters on the Defending Pokémon. This attack does 30 damage plus 10 more damage for each heads."
		},

		cost: ["Psychic", "Colorless", "Colorless"]
	}]
}

export default card
