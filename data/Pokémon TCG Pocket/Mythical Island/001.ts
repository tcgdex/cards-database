import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggcute"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "Though it may look like it's just a bunch of eggs, it's a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Growth Spurt"
		},

		cost: ["Colorless"],

		effect: {
			en: "Take a <span class=\"energy-text energy-text--type-grass\"></span> Energy from your Energy Zone and attach it to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card