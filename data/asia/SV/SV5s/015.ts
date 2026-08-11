import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Whimsicott"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		id: "Whimsicott berbuat iseng dengan menyebarkan kapas ke segala arah. Kapasnya akan menjadi berat saat basah oleh air sehingga ia tidak dapat bergerak dan hanya bisa pasrah."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Pemulihan Enteng"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Pulihkan HP Pokémon {Daun} di Arena Bertarung sendiri sepenuhnya. Setelah itu, buang semua Energi yang dikenakan pada Pokémon yang telah dipulihkan ke Trash."
		}
	}],

	attacks: [{
		name: {
			id: "Bom Benih"
		},

		damage: 40,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card