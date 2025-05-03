import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Regice"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		en: "With cold air that can reach temperatures as low as −328 degrees Fahrenheit, Regice instantly freezes any creature that approaches it."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Crystal Body"
		},

		effect: {
			en: "Prevent all effects of attacks used by your opponent's Pokémon done to this Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Frost Smash"
		},

		damage: 50,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card
