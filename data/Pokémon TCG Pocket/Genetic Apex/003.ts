import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Venusaur"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	stage: "Stage2",
	evolveFrom: {
		en: "Ivysaur"
	},

	attacks: [{
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		name: {
			en: "Mega Drain"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon."
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	description: {
		en: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
	}
}

export default card
