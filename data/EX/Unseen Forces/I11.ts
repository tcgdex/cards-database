import { Card } from "../../../interfaces"
import Set from "../Unseen Forces"

const card: Card = {
	set: Set,

	name: {
		de: "Icognito I"
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
			de: "Switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent choose the Defending Pokémon to switch. The new Defending Pokémon is now Burned and Confused."
		},

		cost: ["Psychic", "Colorless"]
	}]
}

export default card