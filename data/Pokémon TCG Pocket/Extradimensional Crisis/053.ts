import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Stakataka"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		en: "It appeared from an Ultra Wormhole. Each one\nappears to be made up of many life-forms\nstacked one on top of each other."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Brass Rock"
		},

		damage: 40,
		cost: ["Metal", "Colorless"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card