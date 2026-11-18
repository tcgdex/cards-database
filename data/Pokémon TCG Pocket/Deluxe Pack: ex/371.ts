import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Lugia ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Elemental Blast"
		},

		damage: 180,
		cost: ["Fire", "Water", "Lightning"],

		effect: {
			en: "Discard a {R}, {W}, and {L} Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card