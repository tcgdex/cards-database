import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Scyther"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		id: "Scyther melaju sambil memotong rerumputan menggunakan sabit tajamnya. Pergerakannya tidak bisa diikuti karena terlalu cepat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Gerakan Cepat"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Potongan Iai"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card