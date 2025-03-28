import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Regigigas"
	},

	illustrator: "Tetsu Kayama",
	rarity: "One Star",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		en: "It is said to have made Pokémon that look like itself from a special ice mountain, rocks, and magma."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Raging Hammer"
		},

		damage: "50+",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does more damage equal to the damage this Pokémon has on it."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 4
}

export default card
