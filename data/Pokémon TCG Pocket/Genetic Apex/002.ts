import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Ivysaur"
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Bulbasaur"
	}, 

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Razor Leaf"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
	}
}

export default card
