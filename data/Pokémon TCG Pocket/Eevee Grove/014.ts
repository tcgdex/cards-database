import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Salandit"
	},

	illustrator: "tetsuya koizumi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		en: "It taunts its prey and lures them into narrow,\nrocky areas where it then sprays them with toxic\ngas to make them dizzy and take them down."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ember"
		},

		damage: 30,
		cost: ["Fire"],

		effect: {
			en: "Discard a {R} Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card