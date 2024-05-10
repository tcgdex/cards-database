import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Blipbug"
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		id: "Pokémon yang sering terlihat di ladang. Blipbug mendeteksi kejadian di sekitarnya menggunakan bulu yang tumbuh di tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Serangan Kejutan"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card