import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Lycanroc ex"
	},

	illustrator: "Jiro Sasumo",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rockruff"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Lycanfang"
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless"],

		effect: {
			en: "Discard a {F} Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card