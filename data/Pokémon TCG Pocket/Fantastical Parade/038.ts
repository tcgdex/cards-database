import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Vanillish"
	},

	illustrator: "Shibuzoh.",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		en: "Vanillite"
	},

	description: {
		en: "It blasts enemies with cold air reaching −148\ndegrees Fahrenheit, freezing them solid. But it\nspares their lives afterward—it's a kind Pokémon."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Frost Breath"
		},

		damage: 40,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card