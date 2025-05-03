import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Sizzlipede"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gnaw"
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It stores flammable gas in its body and uses it to generate heat. The yellow sections on its belly get particularly hot.",
	}
}

export default card
