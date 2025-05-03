import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Diglett"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Metal"],

	description: {
		en: "The metal-rich geology of this Pokémon's habitat caused it to develop steel whiskers on its head."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Headbutt"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card