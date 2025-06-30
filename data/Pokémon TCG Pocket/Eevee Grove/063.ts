import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Cinccino"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Minccino"
	},

	description: {
		en: "Its body secretes oil that this Pokémon spreads\nover its nest as a coating to protect it from dust.\nCinccino won't tolerate even a speck of the stuff."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Slap"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card