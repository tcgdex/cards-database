import { Card } from '../../../interfaces'
import Set from '../Best of game'

const card: Card = {
	set: Set,

	name: {
		en: "Rocket’s Mewtwo"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "None",
	category: "Pokemon",	
	types: ["Psychic",],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Juxtapose"
		},

		effect: {
			en: "Flip a coin. If heads, switch the number of damage counters on Rocket’s Mewtwo with the number of damage counters on the Defending Pokémon (even if it would Knock Out either Pokémon). (It’s okay if 1 of the Pokémon has no damage counters on it.)"
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Hypnoblast"
		},

		damage: 20,

		effect: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep."
		}
	}, {
		cost: ["Psychic", "Psychic", "Psychic", "Colorless"],

		name: {
			en: "Psyburn"
		},

		damage: 60
	}],

	variants: [
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["winner"]
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["winner"],
			size: "jumbo"
		}
	]
}

export default card
