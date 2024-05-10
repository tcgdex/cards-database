import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Gabite"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		id: "Terkadang Gabite berganti kulit dan sisiknya terkelupas. Kandungan dalam sisik Pokémon ini dijadikan obat yang berkhasiat membuat tubuh lelah menjadi segar bugar."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Power Blast"
		},

		effect: {
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 50,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card