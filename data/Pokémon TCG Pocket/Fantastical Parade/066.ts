import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Gardevoir ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	evolveFrom: {
		en: "Kirlia"
	},

	description: {
		en: "When it opens the red plate on its chest and\nunleashes its heart, its strongest psychic power\nis released."
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Fantasia Force"
		},

		damage: 110,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "Take 3 {P} Energy from your Energy Zone and attach it to your {P} Pokémon in any way you like."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card