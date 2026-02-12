import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Ledyba"
	},

	illustrator: "Yuka Morii",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "These very cowardly Pokémon join together and\nuse Reflect to protect their nest."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Punch"
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