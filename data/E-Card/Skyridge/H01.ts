import { Card } from "../../../interfaces"
import Set from "../Skyridge"

const card: Card = {
	set: Set,

	name: {
		de: "Simsala"
	},

	abilities: [{
		type: 'Poke-POWER',
		name: {
			de: "Energy Jump"
		},

		effect: {
			de: "Once during your turn (before your attack), you may move an Energy card from 1 of your Pokémon to another of your Pokémon. This power can't be used if Alakazam is affected by a Special Condition."
		}
	}],

	attacks: [{
		name: {
			de: "Psychic"
		},

		damage: "30+",

		effect: {
			de: "This attack does 30 damage plus 10 more damage for each Energy card attached to the Defending Pokémon."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}]
}

export default card
