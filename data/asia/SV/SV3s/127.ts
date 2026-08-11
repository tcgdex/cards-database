import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Honedge"
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		id: "Tubuh asli Honedge adalah bola mata biru di gagang pedang. Pokémon ini mengisap vitalitas manusia menggunakan kain tuanya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Potong"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card