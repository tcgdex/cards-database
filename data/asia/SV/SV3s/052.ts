import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Eelektross"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		'id-id': "Menggunakan kekuatan lengannya, Eelektross merayap keluar dari laut dan menyergap mangsa di tepi pantai. Pokémon ini menyeret mangsanya ke laut dalam sekejap."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'id-id': "Sengatan Absorpsi"
		},

		effect: {
			'id-id': "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung. Setelah itu, berikan kerusakan sejumlah 60 kepada Pokémon Bertarung yang baru. Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon tersebut menjadi Lumpuh."
		},

		cost: ["Lightning"]
	}, {
		name: {
			'id-id': "Head Bolt"
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