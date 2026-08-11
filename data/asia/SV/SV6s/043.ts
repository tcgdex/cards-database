import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Poliwrath"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	description: {
		id: "Jika hanya untuk sesaat, ia dapat berlari di atas air menggunakan tangan dan kakinya yang sudah berkembang."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Hipnotis"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		},

		cost: ["Water"]
	}, {
		name: {
			id: "Jumping Uppercut"
		},

		effect: {
			id: "Pemain dapat membuat kerusakan yang diberikan bertambah sejumlah 120. Jika dilakukan, kocok kembali Pokémon ini dan semua kartu yang dikenakannya ke Deck sendiri."
		},

		damage: "120+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card