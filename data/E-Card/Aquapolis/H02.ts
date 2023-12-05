import { Card } from "../../../interfaces"
import Set from "../Aquapolis"

const card: Card = {
	set: Set,

	name: {
		de: "Arkani"
	},

	abilities: [{
		type: 'Poke-BODY',
		name: {
			de: "Extreme Speed"
		},

		effect: {
			de: "You pay  less to retreat Arcanine for each Energy attached to it."
		}
	}],

	attacks: [{
		name: {
			de: "Fire Blow"
		},

		damage: "30+",

		effect: {
			de: "You may discard any number of  Energy cards attached to Arcanine when you use this attack. If you do, flip a number of coins equal to the number of  Energy cards you discarded. This attack does 30 damage plus 30 more damage for each heads."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}]
}

export default card
