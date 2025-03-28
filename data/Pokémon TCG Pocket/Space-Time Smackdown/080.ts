import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Rhyhorn"
	},

	illustrator: "otumami",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "Strong, but not too bright, this Pokémon can shatter even a skyscraper with its charging tackles."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Horn Attack"
		},

		damage: 40,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card
