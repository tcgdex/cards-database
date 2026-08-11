import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Charcadet"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'id-id': "Jiwa bersemayam ke dalam arang terbakar, lalu berubah menjadi Pokémon. Dengan semangat bertarung yang membara, Charcadet menantang pertarungan meskipun dengan lawan yang kuat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Proteksi"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Magma Punch"
		},

		damage: 20,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card