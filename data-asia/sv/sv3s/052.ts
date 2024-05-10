import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Eelektross"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		id: "Menggunakan kekuatan lengannya, Eelektross merayap keluar dari laut dan menyergap mangsa di tepi pantai. Pokémon ini menyeret mangsanya ke laut dalam sekejap."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Sengatan Absorpsi"
		},

		effect: {
			id: "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung. Setelah itu, berikan kerusakan sejumlah 60 kepada Pokémon Bertarung yang baru. Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon tersebut menjadi Lumpuh."
		},

		cost: ["Lightning"]
	}, {
		name: {
			id: "Head Bolt"
		},

		damage: 130,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card