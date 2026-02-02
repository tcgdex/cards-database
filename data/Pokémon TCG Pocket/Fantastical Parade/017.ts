import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Teal Mask Ogerpon ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Soothing Wind"
		},

		effect: {
			en: "Each of your Pokémon that has any Energy attached recovers from all Special Conditions and can't be affected by any Special Conditions."
		}
	}],

	attacks: [{
		name: {
			en: "Energized Leaves"
		},

		damage: 60,
		cost: ["Grass", "Grass"],

		effect: {
			en: "If the amount of Energy attached to both Active Pokémon is 5 or more, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card