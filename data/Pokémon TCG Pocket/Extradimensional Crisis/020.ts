import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Xurkitree"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		en: "Although it's alien to this world and a danger here, it's apparently<br />a common organism in the world where it normally lives."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Electronica"
		},

		damage: 60,
		cost: ["Lightning", "Colorless", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card