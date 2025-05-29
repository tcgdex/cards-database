import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Koko ex"
	},

	illustrator: "Dsuke",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Plasma Hurricane"
		},

		damage: 20,
		cost: ["Lightning"],

		effect: {
			en: "Take a {L} Energy from your Energy Zone and attach it to this Pokémon."
		}
	}, {
		name: {
			en: "Mach Bolt"
		},

		damage: 90,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card