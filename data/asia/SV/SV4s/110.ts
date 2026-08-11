import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Exploud"
	},

	illustrator: "LINNE",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	description: {
		'id-id': "Bukan hanya suara keras. Exploud juga mengeluarkan berbagai jenis warna suara dari lubang di tubuhnya untuk melakukan komunikasi dengan sesamanya."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'id-id': "Sudden Shout"
		},

		effect: {
			'id-id': "Buang Pokémon Bertarung lawan dan semua kartu yang dikenakannya ke Trash. Jika pada giliran ini, Pokémon ini tidak berevolusi dari Loudred, serangan ini gagal."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Hantaman Kepala"
		},

		damage: 140,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card