import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Frost Rotom"
	},

	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		en: "This Rotom has entered a refrigerator. It leaps around gleefully after it uses cold air to freeze the area around it."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Blizzard"
		},

		damage: 30,
		cost: ["Water", "Water"],

		effect: {
			en: "This attack also does 10 damage to each of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card
