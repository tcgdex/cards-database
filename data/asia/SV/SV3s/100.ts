import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Haunter"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		id: "Haunter suka bersembunyi di dalam gelap, lalu menepuk pundak manusia dengan tangan gasnya. Sentuhannya membuat tubuh tidak akan berhenti gemetar."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Tidur Singkat Hitam"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		},

		damage: 40,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card