import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Eldegoss"
	},

	illustrator: "kodama",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Gossifleur"
	},

	description: {
		en: "The cotton on the head of this Pokémon can be\nspun into a glossy, gorgeous yarn—a Galar\nregional specialty."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Float Up"
		},

		damage: 40,
		cost: ["Grass"],

		effect: {
			en: "You may shuffle this Pokémon and all attached cards into your deck."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card