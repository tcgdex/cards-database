import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Goldeen"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		id: "Goldeen dikenal sebagai Penari Air karena sirip punggung, sirip dada, dan sirip ekornya berayun dengan anggun."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Orkes Festival"
		},

		effect: {
			id: "Jika ada Lokasi Festival di Arena, Pokémon ini dapat menggunakan serangan yang dimiliki 2 kali berturut-turut. (Jika Pokémon Bertarung lawan KO akibat serangan pertama, gunakan serangan kedua setelah Pokémon Bertarung berikutnya masuk.)"
		}
	}],

	attacks: [{
		name: {
			id: "Pusaran Air"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		},

		damage: 10,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card