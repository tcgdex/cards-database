import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Alakazam"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		'id-id': "Alakazam memiliki kecerdasan yang sangat tinggi. Ada yang mengatakan bahwa Pokémon ini ingat segala kejadian yang terjadi sejak lahir hingga mati."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'id-id': "Strange Hack"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing. Pilih sesukanya Token Kerusakan yang dimiliki Pokémon di Arena lawan, lalu pindahkan sesukanya ke Pokémon di Arena lawan."
		},

		cost: ["Psychic"]
	}, {
		name: {
			'id-id': "Psikis"
		},

		effect: {
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 50 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan."
		},

		damage: "10+",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card