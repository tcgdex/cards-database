import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Malamar"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Inkay"
	},

	description: {
		en: "Gazing at its luminescent spots will quickly\ninduce a hypnotic state, putting the observer\nunder Malamar's control."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Mental Surge"
		},

		cost: ["Darkness"],

		effect: {
			en: "This attack does 20 damage to each of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card