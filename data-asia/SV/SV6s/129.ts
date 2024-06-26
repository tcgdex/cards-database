import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Drakloak"
	},

	illustrator: "cochi8i",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		id: "Drakloak mengumpulkan energi di paru-parunya lalu menembakkannya. Ia merawat dan bertarung bersama Dreepy hingga Dreepy itu tumbuh dengan baik."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Perintah Rekonaisans"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri. Lihat 2 kartu dari atas Deck sendiri, pilih salah satu, lalu tambahkan ke Kartu Pegangan. Kembalikan sisa kartu ke bawah Deck."
		}
	}],

	attacks: [{
		name: {
			id: "Sundulan Naga"
		},

		damage: 70,
		cost: ["Fire", "Psychic"]
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card