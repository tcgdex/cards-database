import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Qwilfish"
	},

	illustrator: "June",
	rarity: "One Star",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		en: "Be cautious if this Pokémon starts sucking in\nwater—it will soon attack by scattering the toxic\nspikes that grow all over its body."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Poison Sting"
		},

		damage: 20,
		cost: ["Water"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card