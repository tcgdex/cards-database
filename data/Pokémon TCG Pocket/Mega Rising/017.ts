import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Petilil",
		fr: "Chlorobule"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [548],
	hp: 60,
	types: ["Grass"],

	description: {
		en: "If the leaves on its head are pruned with\nregularity, this Pokémon can be grown into\na fine plump shape."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flop",
			fr: "Flop"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card