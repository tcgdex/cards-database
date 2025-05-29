import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Naganadel"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Poipole"
	},

	description: {
		en: "It stores hundreds of liters of poisonous liquid<br />inside its body. It is one of the organisms known<br />as UBs."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Electro House"
		},

		damage: 40,
		cost: ["Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card