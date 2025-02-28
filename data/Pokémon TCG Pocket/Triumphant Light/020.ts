import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Snover"
	},

	illustrator: "otumami",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		en: "During cold seasons, it migrates to the<br />mountain's lower reaches. It returns to the<br />snow-covered summit in the spring."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Corkscrew Punch"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card