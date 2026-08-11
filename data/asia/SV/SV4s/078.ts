import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Nacli"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		id: "Nacli terlahir di kubah garam di dasar tanah. Karena ia membagikan garam yang begitu berharga, Pokémon ini dijaga dengan baik pada zaman dahulu."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Memojokkan"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur."
		},

		damage: 10,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card