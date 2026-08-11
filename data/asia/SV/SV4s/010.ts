import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Blipbug"
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'id-id': "Pokémon yang sering terlihat di ladang. Blipbug mendeteksi kejadian di sekitarnya menggunakan bulu yang tumbuh di tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Serangan Kejutan"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
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