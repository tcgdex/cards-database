import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Iron Treads"
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		id: "Terdapat laporan kesaksian atas Pokémon ini dalam beberapa tahun terakhir. Pokémon yang mirip dengan objek misterius yang tertera dalam jurnal ekspedisi kuno."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Dual Core"
		},

		effect: {
			id: "Selama Pokémon ini mengenakan Pemacu Energi Futur, Pokémon ini menjadi 2 tipe yaitu {Petarung} dan {Logam}."
		}
	}],

	attacks: [{
		name: {
			id: "Pass Wheel"
		},

		effect: {
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu pindahkan ke Pokémon Cadangan."
		},

		damage: 60,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card