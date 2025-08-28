import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Frillish"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "It envelops its prey in its veillike arms and draws\nit down to the deeps, five miles below the\nocean's surface."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Absorb"
		},

		damage: 10,
		cost: ["Psychic"],

		effect: {
			en: "Heal 10 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card