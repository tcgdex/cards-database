import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Lugia ex",
		fr: "Lugia-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Elemental Blast",
			fr: "Explosion Élémentaire"
		},

		damage: 180,
		cost: ["Fire", "Water", "Lightning"],

		effect: {
			en: "Discard a {R}, {W}, and {L} Energy from this Pokémon.",
			fr: "Défaussez une Énergie {R}, {W} et {L} de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card