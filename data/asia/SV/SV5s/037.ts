import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Feraligatr"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		id: "Biasanya, pergerakan Feraligatr lamban. Namun, kecepatannya saat menggigit mangsa tidak dapat ditangkap oleh mata."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			id: "Torrent Heart"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri. Letakkan 5 Token Kerusakan pada Pokémon ini. Jika dilakukan, pada giliran ini, kerusakan akibat serangan yang digunakan oleh Pokémon ini kepada Pokémon Bertarung lawan bertambah sejumlah 120."
		}
	}],

	attacks: [{
		name: {
			id: "Ombak Besar"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Ombak Besar."
		},

		damage: 160,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card