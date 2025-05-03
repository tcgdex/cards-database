import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Ekans"
	},

	illustrator: "Krgc",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "By dislocating its jaw, it can swallow prey larger than itself. After a meal, it curls up and rests."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Poison Sting"
		},

		cost: ["Darkness"],

		effect: {
			en: "Your opponent’s Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
