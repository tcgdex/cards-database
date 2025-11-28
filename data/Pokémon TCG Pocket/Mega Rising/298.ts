import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Articuno"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [144],
	hp: 100,
	types: ["Water"],

	description: {
		en: "It's said that this Pokémon's beautiful blue wings\nare made of ice. Articuno flies over snowy\nmountains, its long tail fluttering along behind it."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ice Beam"
		},

		damage: 60,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-altaria"]
}

export default card