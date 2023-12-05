import { Card } from "../../../interfaces"
import Set from "../Unseen Forces"

const card: Card = {
	set: Set,

	name: {
		de: "Icognito Q"
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
			de: "Search your deck for up to 3 different types of basic Energy cards, show it to your opponent and put it into your hand. Shuffle your deck afterward."
		},

		cost: ["Colorless"]
	}]
}

export default card