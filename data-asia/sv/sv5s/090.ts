import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Mightyena"
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		id: "Mightyena pasti akan menuruti perintah pelatih yang unggul. Ini adalah perilaku bawaan ketika ia beraktivitas dalam kelompok pada zaman dahulu."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Tendangan Menghempaskan"
		},

		effect: {
			id: "Tukar Pokémon Bertarung lawan dengan Pokémon Cadangan. [Pokémon yang akan dimasukkan ke Arena Bertarung dipilih oleh lawan.]"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			id: "Taring Tajam"
		},

		damage: 130,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card