import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Scrafty"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Scraggy"
	},

	description: {
		en: "This Pokémon may be rude, but it takes very\ngood care of its family, its friends, and its turf."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Crush the Weak"
		},

		damage: 50,
		cost: ["Darkness", "Darkness"],

		effect: {
			en: "If this Pokémon has more Energy attached than your opponent's Active Pokémon, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card