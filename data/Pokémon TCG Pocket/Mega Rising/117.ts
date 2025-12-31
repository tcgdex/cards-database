import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Swirlix"
	},

	illustrator: "Kurata So",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "The sweet smell of cotton candy perfumes\nSwirlix's fluffy fur. This Pokémon spits out\nsticky string to tangle up its enemies."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Cotton Guard"
		},

		damage: 10,
		cost: ["Psychic"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks."
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