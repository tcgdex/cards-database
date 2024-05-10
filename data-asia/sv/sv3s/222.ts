import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Gholdengo ex"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 260,
	types: ["Metal"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Bonus Coin"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri. Ambil 1 kartu dari atas Deck sendiri. Jika Pokémon ini ada di Arena Bertarung, ambil lagi 1 kartu tambahan."
		}
	}],

	attacks: [{
		name: {
			id: "Terjangan Emas"
		},

		effect: {
			id: "Buang sesukanya Energi Dasar dari Kartu Pegangan sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 50 untuk tiap lembarnya."
		},

		damage: "50×",
		cost: ["Metal"]
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
	regulationMark: "G"
}

export default card