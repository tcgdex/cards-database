import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Mawile"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		id: "Mawile melahap dan menggigit lawannya menggunakan rahang besar yang merupakan perubahan wujud dari tanduk bajanya."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Special Eater"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan ke Cadangan. Pilih 1 Energi Spesial yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		}
	}],

	attacks: [{
		name: {
			id: "Taring Tajam"
		},

		damage: 90,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card