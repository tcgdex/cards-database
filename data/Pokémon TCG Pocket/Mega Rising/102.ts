import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Altaria ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],

	evolveFrom: {
		en: "Swablu"
	},

	description: {
		en: "On sunny days, it flies freely through the sky and\nblends into the clouds. It sings in a beautiful\nsoprano."
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Mega Harmony"
		},

		damage: 40,
		cost: ["Psychic", "Psychic"],

		effect: {
			en: "This attack does 30 more damage for each of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card