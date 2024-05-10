import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Thievul"
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		id: "Thievul berkeliling untuk mencuri makanan dan telur menggunakan tubuh lincah dan cakar tajamnya. Boltund adalah musuh alaminya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Jambret"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Lihat Kartu Pegangan lawan, pilih 2 lembar Energi di antaranya, lalu kocok kembali ke Deck lawan."
		}
	}],

	attacks: [{
		name: {
			id: "Cakar Penyayat"
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