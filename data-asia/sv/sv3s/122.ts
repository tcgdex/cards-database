import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Ferroseed"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		id: "Ferroseed menyukai gua yang berlumut. Enzim yang terkandung dalam lumut membantu menumbuhkan duri-duri Pokémon ini menjadi besar dan kuat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Duri Penusuk"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card