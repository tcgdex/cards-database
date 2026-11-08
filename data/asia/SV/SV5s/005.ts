import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Shiftry"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		'id-id': "Pokémon yang ditakuti sebagai Dewa Hutan. Shiftry memiliki kemampuan untuk membaca pikiran lawan dan mengantisipasinya."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'id-id': "Tornado Pengusir"
		},

		effect: {
			'id-id': "Pilih 3 Pokémon Cadangan lawan. Setelah itu, kocok kembali semua Pokémon Cadangan lawan yang tidak dipilih dan semua kartu yang dikenakannya ke Deck lawan."
		},

		cost: ["Grass"]
	}, {
		name: {
			'id-id': "Energy Loop"
		},

		effect: {
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu kembalikan ke Kartu Pegangan."
		},

		damage: 140,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card