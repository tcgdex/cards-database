import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Bulu"
	},

	illustrator: "OKACHEKE",
	rarity: "One Star",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		en: "Although it's called a guardian deity, it's violent enough to crush anyone it sees as an enemy."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Stuck-In Tackle"
		},

		damage: 100,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			en: "Flip a coin. If tails, this Pokémon also does 20 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card