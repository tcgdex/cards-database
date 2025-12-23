import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Lycanroc ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [745],
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rockruff"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Lycanfang"
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless"],

		effect: {
			en: "Discard a {F} Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-gyarados"]
}

export default card