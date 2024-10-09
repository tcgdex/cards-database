import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Swirlix"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		id: "Dalam sehari, Swirlix memakan gula seberat berat badannya. Jika kekurangan gula, Pokémon ini akan menjadi sangat cemberut."
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
			id: "Letakkan Diam-diam"
		},

		effect: {
			id: "Letakkan 2 Token Kerusakan pada 1 Pokémon lawan."
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card