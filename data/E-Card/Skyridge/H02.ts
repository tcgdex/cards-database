import { Card } from "../../../interfaces"
import Set from "../Skyridge"

const card: Card = {
	set: Set,

	name: {
		de: "Arkani"
	},

	abilities: [{
		type: 'Poke-POWER',
		name: {
			de: "Energy Recharge"
		},

		effect: {
			de: "When your play Arcanine from your hand to evolve your Active Pokémon, you may flip 3 coins. For each heads, choose a basic Energy card from your discard pile and attach it to Arcanine."
		}
	}],

	attacks: [{
		name: {
			de: "Shake"
		},

		damage: 10,

		effect: {
			de: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any."
		},

		cost: ["Colorless"]
	}, {
		name: {
			de: "White Flames"
		},

		damage: 70,

		effect: {
			de: "Discard all  Energy cards attached to Arcanine."
		},

		cost: ["Fire", "Fire", "Colorless"]
	}]
}

export default card
