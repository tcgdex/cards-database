import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Swoobat"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		id: "Kabarnya ada daerah yang memuja Swoobat sebagai simbol pemanggil kebahagiaan karena bentuk hidungnya dianggap membawa hoki."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Gelombang Memesona"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing. Jumlah Token Kerusakan yang diletakkan akibat kondisi Pusing ini adalah 6."
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card