import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Seadra"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		id: "Mulut Seadra kecil, tapi kekuatan isapnya besar. Pokémon ini dalam sekejap dapat mengisap dan memakan makanan yang lebih besar dari ukuran mulutnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Sinar Gelembung"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card