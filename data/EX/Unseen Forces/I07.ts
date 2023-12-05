import { Card } from "../../../interfaces"
import Set from "../Unseen Forces"

const card: Card = {
	set: Set,

	name: {
		de: "Icognito E"
	},

	abilities: [{
		name: {
			de: "Shuffle"
		},

		effect: {
			de: "Once during your turn (before your attack), you may search your deck for another Unown and switch it with Unown. (Any cards attached to Unown, damage counters, Special Conditions, and effects on it are now in the new Pokémon.) If you do, put Unown on top of your deck. Shuffle your deck afterward. You can't use more than 1 Shuffle Poké-Power each turn."
		}
	}],

	attacks: [{
		name: {
			de: "Hidden Power"
		},

		effect: {
			de: "If your opponent's Bench isn't full, look at his or her hand. Choose 1 Basic Pokémmon you find there and put it onto your opponent's Bnech. Then, switch is with the Defending Pokémon. Your opponent choose the Defending Pokémon to switch."
		},

		cost: ["Colorless"]
	}]
}

export default card