import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Tatsugiri"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		id: "Pokémon yang sangat licik. Tatsugiri pura-pura melemah untuk memancing mangsanya, lalu memerintah Pokémon rekannya untuk menyerang mangsa tersebut."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Pistol Air"
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			id: "Strategi Bertahan Hidup"
		},

		effect: {
			id: "Pilih paling banyak 2 kartu sesukanya dari Deck sendiri, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck. Pemain dapat menukar Pokémon ini dengan Pokémon Cadangan."
		},

		cost: ["Colorless", "Colorless"]
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card