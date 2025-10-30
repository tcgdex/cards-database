import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Absol"
	},

	illustrator: "nagimiso",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		en: "Because of this Pokémon's ability to detect\ndanger, people mistook Absol as a bringer\nof doom."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ominous Claw"
		},

		damage: 50,
		cost: ["Darkness", "Darkness"],

		effect: {
			en: "Flip a coin. If heads, your opponent reveals their hand. Choose a Supporter card you find there and discard it."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card