import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Wimpod"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		id: "Wimpod selalu hidup bersama kelompoknya dan berjaga-jaga atas bahaya di sekelilingnya. Begitu merasakan kehadiran musuh, mereka segera kabur dan tercerai berai."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Makan Sembunyi-sembunyi"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 kartu dari Kartu Pegangan lawan tanpa melihat sisi depan, lalu buang ke Trash."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Menyeruduk"
		},

		damage: 30,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card