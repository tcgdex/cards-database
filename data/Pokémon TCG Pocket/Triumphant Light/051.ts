import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Croagunk"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "Inflating its poison sacs, it fills the area with an<br />odd sound and hits flinching opponents with a<br />poison jab."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Beat"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card