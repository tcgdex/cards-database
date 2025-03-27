import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Arbok"
	},

	illustrator: "Midori Harada",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Ekans"
	},

	description: {
		en: "After stunning its opponents with the pattern on its stomach, it quickly wraps them up in its body and waits for them to stop moving."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Venomous Fang"
		},

		damage: 70,
		cost: ["Darkness", "Darkness", "Colorless"],

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