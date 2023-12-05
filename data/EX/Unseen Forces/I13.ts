import { Card } from "../../../interfaces"
import Set from "../Unseen Forces"

const card: Card = {
	set: Set,

	name: {
		de: "Icognito K"
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

		damage: 20,

		effect: {
			de: "You may discard any Stadium card in play."
		},

		cost: ["Psychic", "Colorless"]
	}]
}

export default card