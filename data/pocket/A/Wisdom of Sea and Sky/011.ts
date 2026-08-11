import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ledyba",
		'fr-fr': "Coxy"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [165],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "These very cowardly Pokémon join together and\nuse Reflect to protect their nest.",
		'fr-fr': "Extrêmement timide, ce Pokémon défend le nid qu'il partage avec ses congénères en utilisant Protection."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Bug Bite",
			'fr-fr': "Piqûre"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card