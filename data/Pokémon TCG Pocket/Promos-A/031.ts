import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Cinccino"
	},

	illustrator: "MAHOU",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Minccino"
	},

	description: {
		en: "Its body secretes oil that this Pokémon spreads<br />over its nest as a coating to protect it from dust.<br />Cinccino won't tolerate even a speck of the stuff."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Do the Wave"
		},

		damage: 30,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 30 damage for each of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card