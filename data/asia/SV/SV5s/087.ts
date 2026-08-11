import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Haunter"
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		'id-id': "Haunter suka bersembunyi di dalam gelap, lalu menepuk pundak manusia dengan tangan gasnya. Sentuhannya membuat tubuh tidak berhenti gemetar."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Napas Beracun"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		},

		damage: 30,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card