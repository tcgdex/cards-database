import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Glimmora ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Medan Debu"
		},

		effect: {
			id: "Selama Pokémon ini ada di Arena Bertarung, jumlah Pokémon yang dapat dimasukkan lawan ke Cadangan menjadi 3. Jika ada 4 atau lebih Pokémon di Cadangan lawan, lawan membuang Pokémon Cadangan ke Trash hingga jumlah Pokémon di Cadangan menjadi 3. [Efek yang mengubah jumlah Cadangan mengutamakan efek yang jumlahnya lebih sedikit.]"
		}
	}],

	attacks: [{
		name: {
			id: "Poison Gem"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		},

		damage: 140,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card