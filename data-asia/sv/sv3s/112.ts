import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Scrafty"
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		id: "Scrafty memiliki sifat yang sangat kasar, tapi Pokémon ini juga menjaga baik-baik keluarga, teman, dan daerah kekuasaannya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Hajar"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Pokémon Basic yang menerima serangan ini tidak dapat menggunakan serangan."
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Hantaman Kepala"
		},

		damage: 130,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card