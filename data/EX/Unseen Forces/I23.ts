import { Card } from "../../../interfaces"
import Set from "../Unseen Forces"

const card: Card = {
	set: Set,

	name: {
		de: "Icognito U"
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

		damage: 10,

		effect: {
			de: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use this attack during your opponent's next turn."
		},

		cost: ["Psychic", "Colorless"]
	}]
}

export default card