import { Card } from "../../../interfaces"
import Set from "../Aquapolis"

const card: Card = {
	set: Set,

	name: {
		de: "Azumarill"
	},

	abilities: [{
		type: 'Poke-POWER',
		name: {
			de: "Bubble Turn"
		},

		effect: {
			de: "Once during your turn (before your attack), if Azumarill is on your Bench, you may flip a coin. If heads, return Azumarill and all cards attached to it to your hand."
		}
	}],

	attacks: [{
		name: {
			de: "Aqua Sonic"
		},

		damage: 40,

		effect: {
			de: "Don't apply Resistance."
		},

		cost: ["Water", "Colorless", "Colorless"]
	}]
}

export default card
