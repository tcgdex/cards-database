import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Tympole"
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		id: "Tympole berkomunikasi dengan temannya menggunakan gelombang suara. Suara peringatan yang dikeluarkan Pokémon ini tidak terdengar oleh orang dan Pokémon lainnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Screw Tail"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card