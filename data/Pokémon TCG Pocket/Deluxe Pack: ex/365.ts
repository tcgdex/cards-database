import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Mewtwo ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Psychic Sphere"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			en: "Psydrive"
		},

		damage: 150,
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"],

		effect: {
			en: "Discard 2 {P} Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card