import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Pachirisu ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Sparking Gadget"
		},

		damage: "40+",
		cost: ["Lightning", "Lightning"],

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 40 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
