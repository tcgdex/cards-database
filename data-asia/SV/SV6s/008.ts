import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Heracross"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		id: "Pokémon yang memiliki tenaga super. Heracross dapat membanting benda yang lebih berat 100 kali lipat dari berat badannya dengan mudah."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menindih"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 60,
		cost: ["Grass", "Colorless", "Colorless"]
	}, {
		name: {
			id: "Bantingan Keras"
		},

		damage: 130,
		cost: ["Grass", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card