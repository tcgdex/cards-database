import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Fini"
	},

	illustrator: "chibi",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		en: "This guardian deity of Poni Island manipulates water. Because it lives deep within a thick fog, it came to be both feared and revered."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spiral Drain"
		},

		damage: 60,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "Heal 20 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card