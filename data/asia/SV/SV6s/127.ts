import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Dipplin"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	description: {
		'id-id': "Boah luar yang mengeluarkan kepala dan Boah dalam yang mengeluarkan ekor saling membantu dan tinggal bersama di dalam apel."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Sirop Nektar Penangkap"
		},

		effect: {
			'id-id': "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung. Setelah itu, berikan kerusakan sejumlah 70 kepada Pokémon Bertarung yang baru."
		},

		cost: ["Grass", "Fire"]
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card