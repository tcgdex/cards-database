import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Xerneas"
	},

	illustrator: "sui",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		en: "When the horns on its head shine\nin seven colors, it is said to be\nsharing everlasting life."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Geoburst"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Colorless"],

		effect: {
			en: "This attack's damage is reduced by the amount of damage this Pokémon has on it."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card