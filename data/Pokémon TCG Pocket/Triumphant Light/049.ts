import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Golbat"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	evolveFrom: {
		en: "Zubat"
	},

	description: {
		en: "It loves to drink other creatures' blood. It's said<br />that if it finds others of its kind going hungry,<br />it sometimes shares the blood it's gathered."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bite"
		},

		damage: 30,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card