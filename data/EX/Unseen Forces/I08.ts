import { Card } from "../../../interfaces"
import Set from "../Unseen Forces"

const card: Card = {
	set: Set,

	name: {
		de: "Icognito F"
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
			de: "Flip 3 coins. If 1 of them is heads, the Defending Pokémon is now Asleep. If 2 of them are heads, the Defending Pokémon is now Confused. If all of them are heads, the Defending Pokémon is now Paralysed."
		},

		cost: ["Psychic", "Colorless"]
	}]
}

export default card