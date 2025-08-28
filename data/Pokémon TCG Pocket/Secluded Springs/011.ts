import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Fletchinder"
	},

	illustrator: "5ban Graphics",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	evolveFrom: {
		en: "Fletchling"
	},

	description: {
		en: "Fletchinder scatters embers in tall grass\nwhere bug Pokémon might be hiding and\nthen catches them as they come leaping out."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fire Wing"
		},

		damage: 40,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card