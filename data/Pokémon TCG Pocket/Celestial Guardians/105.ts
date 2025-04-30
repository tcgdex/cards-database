import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Minior"
	},

	illustrator: "Amelicart",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "Places where Minior fall from the night sky are few and far between, with Alola being one of the precious few."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Star Drop"
		},

		cost: ["Fighting", "Fighting"],

		effect: {
			en: "This attack does 40 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card