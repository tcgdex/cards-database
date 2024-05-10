import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Panpour"
	},

	illustrator: "Natsumi Yoshida",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		id: "Air yang ditampung pada jambul di kepala Panpour penuh dengan gizi. Tanaman yang disiram dengan air tersebut akan tumbuh besar."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Memanggil Teman"
		},

		effect: {
			id: "Pilih 1 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Aura Air"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		},

		damage: 30,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card