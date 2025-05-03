import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Comfey"
	},

	illustrator: "mashu",
	rarity: "One Star",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "Comfey picks flowers with its vine and decorates itself with them. For some reason, flowers won't wither once they're attached to a Comfey."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Flower Shield"
		},

		effect: {
			en: "Each of your Pokémon that has any  Energy attached recovers from all Special Conditions and can't be affected by any Special Conditions."
		}
	}],

	attacks: [{
		name: {
			en: "Spinning Attack"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card