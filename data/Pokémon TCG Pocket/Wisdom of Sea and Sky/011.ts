import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Ledyba",
		fr: "Coxy"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "These very cowardly Pokémon join together and\nuse Reflect to protect their nest.",
		fr: "Extrêmement timide, ce Pokémon défend le nid qu'il partage avec ses congénères en utilisant Protection."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bug Bite",
			fr: "Piqûre"
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