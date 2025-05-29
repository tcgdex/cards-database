import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Rowlet"
	},

	illustrator: "OKACHEKE",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "It sends its feathers, which are as sharp\nas blades, flying in attack. Its legs are strong,\nso its kicks are also formidable."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Fury Attack"
		},

		damage: 10,
		cost: ["Grass"],

		effect: {
			en: "Flip 3 coins. This attack does 10 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card