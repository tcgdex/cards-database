import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Spinarak"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		id: "Ada juga nelayan yang menyulam benang kuat Pokémon ini untuk membuat jaring guna menangkap Pokémon ikan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Gigitan Serangga"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card