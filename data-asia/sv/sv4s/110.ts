import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Exploud"
	},

	illustrator: "LINNE",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	description: {
		id: "Bukan hanya suara keras. Exploud juga mengeluarkan berbagai jenis warna suara dari lubang di tubuhnya untuk melakukan komunikasi dengan sesamanya."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Sudden Shout"
		},

		effect: {
			id: "Buang Pokémon Bertarung lawan dan semua kartu yang dikenakannya ke Trash. Jika pada giliran ini, Pokémon ini tidak berevolusi dari Loudred, serangan ini gagal."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Hantaman Kepala"
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