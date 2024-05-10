import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Dunsparce"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		id: "Dunsparce membuat labirin di tempat gelap. Jika ada yang melihatnya, Pokémon ini akan melarikan diri dengan menggali lubang menggunakan ekornya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menggerogot"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Menggali"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card