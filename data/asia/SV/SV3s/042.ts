import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Dondozo"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		'id-id': "Meskipun rakus, Dondozo tidak pandai menangkap makanannya. Pokémon ini membentuk tim dengan Tatsugiri untuk berburu dan menangkap mangsa."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Suplementasi Lahap Sekaligus"
		},

		effect: {
			'id-id': "Lihat 5 kartu dari atas Deck sendiri, pilih sesukanya Energi Dasar di antaranya, lalu kenakan pada Pokémon ini. Kocok kembali sisa kartu ke Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Hydro Splash"
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