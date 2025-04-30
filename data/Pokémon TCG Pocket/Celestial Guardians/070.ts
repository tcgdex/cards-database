import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Sableye"
	},

	illustrator: "Aya Kusube",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		en: "It dwells in the darkness of caves. It uses its sharp claws to dig up gems to nourish itself."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Corner"
		},

		damage: 40,
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card