import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Clefairy"
	},

	illustrator: "rika",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "It is said that happiness will come to those who<br />see a gathering of Clefairy dancing under a<br />full moon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Smack"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card