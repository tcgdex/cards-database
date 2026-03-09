import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Medicham"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Meditite"
	},

	description: {
		en: "It elegantly avoids attacks with dance-like\nsteps, then launches a devastating blow in\nthe same motion."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Psykick"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"],

		effect: {
			en: "If this Pokémon has any {P} Energy attached, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card