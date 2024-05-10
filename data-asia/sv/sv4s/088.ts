import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Liepard"
	},

	illustrator: "Yoshioka",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		id: "Liepard bertarung dengan Thievul untuk memperebutkan wilayah kekuasaan. Pokémon ini menyelinap ke belakang musuhnya tanpa menimbulkan suara sedikit pun."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Dirty Swap"
		},

		effect: {
			id: "Pilih 1 Pokémon Cadangan sendiri, lalu pindahkan semua Token Kerusakan yang dimiliki Pokémon yang telah dipilih ke Pokémon Bertarung lawan."
		},

		cost: ["Darkness"]
	}, {
		name: {
			id: "Menyayat"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card