import { Card } from "../../../interfaces"
import Set from "../Unseen Forces"

const card: Card = {
	set: Set,

	name: {
		de: "Icognito V"
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

		damage: "20+",

		effect: {
			de: "Does 20 damage plus 10 more damage for each Basic Pokémon and each Evolution card in your discard pile. You can't add more than 60 damage in this way."
		},

		cost: ["Psychic", "Colorless", "Colorless"]
	}]
}

export default card