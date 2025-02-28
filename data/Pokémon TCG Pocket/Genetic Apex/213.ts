import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Cinccino"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: {
		en: "Minccino"
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Do the Wave"
		},

		effect: {
			en: "This attack does 30 damage for each of your Benched Pokémon."
		},

		damage: "30×"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "Its body secretes oil that this Pokémon spreads over its nest as a coating to protect it from dust. Cinccino won't tolerate even a speck of the stuff.",
	}
}

export default card
