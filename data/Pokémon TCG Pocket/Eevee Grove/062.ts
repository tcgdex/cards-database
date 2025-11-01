import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Minccino",
		fr: "Chinchidou"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		en: "The way it brushes away grime with its tail\ncan be helpful when cleaning. But its focus on\nspotlessness can make cleaning more of a hassle.",
		fr: "Il époussette les saletés avec sa queue. Il est d'une aide précieuse pour faire le ménage, mais il est très tatillon sur la propreté."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pound",
			fr: "Écras'Face"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card