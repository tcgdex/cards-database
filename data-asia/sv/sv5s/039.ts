import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Sharpedo"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		id: "Begitu mencium bau mangsa, Sharpedo menyemburkan air laut dari bagian belakang tubuhnya dan menyerang dengan kecepatan 120 km/jam."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Gigit dan Buang"
		},

		effect: {
			id: "Lempar koin 3 kali. Pilih kartu dari Kartu Pegangan lawan tanpa melihat sisi depan untuk tiap lemparan dengan hasil sisi depan, lalu buang ke Trash."
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Jet Head"
		},

		damage: 100,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card