import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Grubbin"
	},

	illustrator: "Yuka Morii",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "Its natural enemies, like Rookidee, may flee rather than risk getting caught in its large mandibles that can snap thick tree branches."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Gnaw"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card