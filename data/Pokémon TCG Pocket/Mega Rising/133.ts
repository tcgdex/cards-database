import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Archen"
	},

	illustrator: "0313",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Plume Fossil"
	},

	description: {
		en: "Archen is said to be the ancestor of bird\nPokémon. It lived in treetops, eating berries\nand bug Pokémon."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Rock Throw"
		},

		damage: 40,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card