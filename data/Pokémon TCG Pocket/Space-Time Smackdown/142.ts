import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Fan Rotom"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		en: "This Rotom has entered an electric fan. It smirks with satisfaction over a prank well pulled after it blows away everything around it."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spin Storm"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, put your opponent's Active Pokémon into their hand."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
