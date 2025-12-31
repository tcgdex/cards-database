import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Blacephalon",
		fr: "Pierroteknik"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		en: "It slithers toward people. Then, without warning, it triggers the\nexplosion of its own head. It's apparently one kind of Ultra Beast.",
		fr: "Il s'approche des gens avec son allure désarticulée et fait subitement exploser sa tête. Ce serait une Ultra-Chimère."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Beat Punk",
			fr: "Punk Pop"
		},

		damage: 130,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "This Pokémon also does 70 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 70 dégâts."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card