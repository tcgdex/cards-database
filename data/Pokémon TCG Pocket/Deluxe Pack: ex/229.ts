import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

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
		en: "It loves to drink other creatures' blood. It's said\nthat if it finds others of its kind going hungry,\nit sometimes shares the blood it's gathered."
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