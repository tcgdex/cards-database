import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Arceus ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fabled Luster"
		},

		effect: {
			en: "This Pokémon can't be affected by any Special Conditions."
		}
	}],

	attacks: [{
		name: {
			en: "Ultimate Force"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 20 more damage for each of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card