import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Ekans"
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		id: "Seiring dengan pertumbuhannya, Ekans menjadi kian memanjang. Kemudian saat malam hari, ia melilitkan tubuhnya di ranting pohon dan beristirahat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Racun Campur Aduk"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Racun dan Pusing."
		},

		cost: ["Darkness"]
	}, {
		name: {
			id: "Menggigit"
		},

		damage: 30,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card