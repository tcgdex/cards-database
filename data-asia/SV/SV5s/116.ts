import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Tranquill"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		id: "Kecepatan terbang Tranquill di angkasa biasa saja. Akan tetapi, ia dapat mengingat wajah pelatih dan posisi sarangnya sehingga selalu bisa pulang kembali walau terpisah di tempat sejauh apa pun."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Terbang Cepat"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Jet Wing"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card