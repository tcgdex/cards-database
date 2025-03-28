import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Weavile ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		en: "Sneasel"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Scratching Nails"
		},

		damage: "30+",
		cost: ["Darkness"],

		effect: {
			en: "If your opponent's Active Pokémon has damage on it, this attack does 40 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card
