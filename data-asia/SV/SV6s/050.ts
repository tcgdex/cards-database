import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Milotic"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		id: "Pokémon yang tinggal di dasar danau yang jernih. Ia akan muncul pada saat peperangan terjadi untuk menyembuhkan hati orang-orang."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Kondisi Kalem"
		},

		effect: {
			id: "Selama Pokémon ini ada di Arena, Pokémon di Arena lawan dan semua kartu yang dikenakan Pokémon tersebut tidak dapat dikembalikan ke Kartu Pegangan."
		}
	}],

	attacks: [{
		name: {
			id: "Hydro Splash"
		},

		damage: 100,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card