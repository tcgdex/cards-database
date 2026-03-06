import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Tyrantrum"
	},

	illustrator: "hatachu",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Tyrunt"
	},

	description: {
		en: "A single bite of Tyrantrum's massive jaws will\ndemolish a car. This Pokémon was the king of the\nancient world."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Tyrannical Fang"
		},

		damage: 100,
		cost: ["Fighting", "Fighting", "Fighting"],

		effect: {
			en: "If you have fewer Pokémon in play than your opponent, this attack does 80 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card