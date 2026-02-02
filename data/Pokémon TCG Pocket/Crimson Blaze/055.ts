import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Ditto"
	},

	illustrator: "Yuka Morii",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "It can freely recombine its own cellular structure\nto transform into other life-forms."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Copy a Friend"
		},

		cost: ["Colorless"],

		effect: {
			en: "Choose 1 of your Benched Pokémon's attacks, except any Pokémon ex, and use it as this attack. If this Pokémon doesn't have the necessary Energy to use that attack, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card