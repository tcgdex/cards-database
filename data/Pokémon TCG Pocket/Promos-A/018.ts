import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Venusaur"
	},

	illustrator: "Kuroimori",
	rarity: "None",
	category: "Pokemon",
	types: ["Grass"],
	stage: "Stage2",

	attacks: [{
		name: {
			en: "Mega Drain"
		},

		cost: ["Grass", "Grass", "Colorless", "Colorless"],
		damage: 80,

		effect: {
			en: "Heal 30 damage from this Pokémon."
		}
	}],

	hp: 160,

	evolveFrom: {
		en: "Ivysaur"
	},

	description: {
		en: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."
	},

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card
