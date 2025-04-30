import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Rowlet"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "It sends its feathers, which are as sharp as blades, flying in attack. Its legs are strong, so its kicks are also formidable."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Skill Dive"
		},

		cost: ["Grass"],

		effect: {
			en: "This attack does 10 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card