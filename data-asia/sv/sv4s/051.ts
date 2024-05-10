import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Oricorio"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		id: "Meskipun tarian penuh semangat dan ceria Oricorio populer di kalangan anak-anak, Pokémon ini jarang dijumpai di Daerah Paldea."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Cheer Up"
		},

		effect: {
			id: "Kocok kembali semua Kartu Pegangan sendiri ke Deck. Setelah itu, ambil kartu dari atas Deck untuk tiap Pokémon Cadangan kedua pemain."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Shock Wave"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card