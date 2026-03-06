import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Krabby",
		fr: "Krabby"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [98],
	hp: 70,
	types: ["Water"],

	description: {
		en: "It can be found near the sea. The large pincers\ngrow back if they are torn out of their sockets.",
		fr: "On trouve ce Pokémon près de la mer. Ses grosses pinces peuvent repousser si elles sont arrachées."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Vise Grip",
			fr: "Force Poigne"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card