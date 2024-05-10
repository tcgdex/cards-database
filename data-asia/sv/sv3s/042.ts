import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Dondozo"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		id: "Meskipun rakus, Dondozo tidak pandai menangkap makanannya. Pokémon ini membentuk tim dengan Tatsugiri untuk berburu dan menangkap mangsa."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Suplementasi Lahap Sekaligus"
		},

		effect: {
			id: "Lihat 5 kartu dari atas Deck sendiri, pilih sesukanya Energi Dasar di antaranya, lalu kenakan pada Pokémon ini. Kocok kembali sisa kartu ke Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Hydro Splash"
		},

		damage: 180,
		cost: ["Water", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card