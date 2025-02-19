import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Rhyhorn"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Tackle"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3,
	rarity: "One Diamond",

	description: {
		en: "Strong, but not too bright, this Pokémon can shatter even a skyscraper with its charging tackles.",
	}
}

export default card
