import { Card } from "../../../interfaces"
import Set from "../Aquapolis"

const card: Card = {
	set: Set,

	name: {
		de: "Lektrobal"
	},

	abilities: [{
		type: 'Poke-POWER',
		name: {
			de: "Super Dynamo"
		},

		effect: {
			de: "Once during your turn (before your attack), if Electrode is your Active Pokémon, you may flip a coin. If heads, choose a  Energy card from your discard pile and attach it to 1 of your Pokémon. This power can't be used if Electrode is affected by a Special Condition."
		}
	}],

	attacks: [{
		name: {
			de: "Swift"
		},

		damage: 30,

		effect: {
			de: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon."
		},

		cost: ["Lightning", "Colorless"]
	}]
}

export default card
