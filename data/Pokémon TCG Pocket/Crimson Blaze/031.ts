import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Mismagius"
	},

	illustrator: "Ligton",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Misdreavus"
	},

	description: {
		en: "Its cries sound like incantations to torment the\nfoe. It appears where you least expect it."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Stored Power"
		},

		damage: 60,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "Move all {P} Energy from this Pokémon to 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card