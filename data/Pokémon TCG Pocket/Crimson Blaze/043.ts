import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Mienfoo"
	},

	illustrator: "yuu",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],

	description: {
		en: "Though small, Mienfoo's temperament is fierce.\nAny creature that approaches Mienfoo carelessly\nwill be greeted with a flurry of graceful attacks."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Chop"
		},

		damage: 30,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card