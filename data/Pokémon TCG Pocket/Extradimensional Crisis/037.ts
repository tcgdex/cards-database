import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Meowth"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "It's accustomed to luxury because it\nused to live with Alolan royalty. As a\nresult, it's very picky about food."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Meddle"
		},

		cost: ["Darkness"],

		effect: {
			en: "Discard a random Pokémon Tool card from your opponent's hand."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card