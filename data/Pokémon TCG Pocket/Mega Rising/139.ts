import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Crabrawler",
		fr: "Crabagarre"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [739],
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "If it loses its pincers, they'll quickly regrow.\nThe pincers are popular ingredients in paella\nsince their shells produce a tasty soup stock."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Knuckle Punch",
			fr: "Coud'Phalange"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-blaziken"]
}

export default card