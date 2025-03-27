import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Meowscarada"
	},

	illustrator: "danciao",
	rarity: "One Star",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		en: "Floragato"
	},

	description: {
		en: "This Pokémon uses the reflective fur lining its cape to camouflage the stem of its flower, creating the illusion that the flower is floating."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Fighting Claws"
		},

		damage: 60,
		cost: ["Grass", "Grass"],

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 70 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card