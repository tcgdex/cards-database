import { Card } from "../../../interfaces"
import Set from "../Unseen Forces"

const card: Card = {
	set: Set,

	name: {
		de: "Icognito R"
	},

	abilities: [{
		name: {
			de: "Shuffle"
		},

		effect: {
			de: "Once during your turn (before your attack), you may search your deck for another Unown and switch it witch Unown. (Any cards attached to Unown, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Unown on the top of your deck. Shuffle your deck afterward. You can't use more than 1 Shuffle Poké-Power each turn."
		}
	}],

	attacks: [{
		name: {
			de: "Hidden Power"
		},

		effect: {
			de: "Flip a coin. If heads, your opponent returns the Defending Pokémon and all cards attached to it to his or her hand. (If your opponent doesn't have any Benched Pokémon or other Active Pokémon, this attack does nothing.)"
		},

		cost: ["Colorless", "Colorless"]
	}]
}

export default card