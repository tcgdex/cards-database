import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Eevee"
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		id: "Eevee memiliki susunan genetik yang tidak teratur. Tubuhnya akan bermutasi ketika terkena radiasi yang dikeluarkan batu elemen."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Kebangkitan"
		},

		effect: {
			id: "Pilih 1 kartu dari Deck sendiri yang merupakan evolusi dari Pokémon ini, lalu letakkan pada Pokémon ini untuk melakukan evolusi. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Serangan Cepat"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card