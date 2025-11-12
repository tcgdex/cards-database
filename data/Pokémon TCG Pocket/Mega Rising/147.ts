import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Coalossal"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Carkol"
	},

	description: {
		en: "It's gentle usually but fearsome when angered.\nWith a body that burns at over 2,700 degrees\nFahrenheit, it crushes foes and turns them to ash."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Coal Drop"
		},

		damage: 100,
		cost: ["Fighting", "Fighting", "Fighting"],

		effect: {
			en: "If your opponent's Active Pokémon is a {G} Pokémon, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4,

	boosters: ["mega-gyarados"]
}

export default card