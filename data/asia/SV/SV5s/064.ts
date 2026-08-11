import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Reuniclus"
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		id: "Daripada menggunakan kekuatan psikokinesis, Reuniclus lebih suka memutar lengan kebanggaannya untuk menghantam dan menumbangkan lawan."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Summon Gate"
		},

		effect: {
			id: "Lihat 8 kartu dari atas Deck sendiri, pilih sesukanya Pokémon di antaranya, lalu masukkan ke Cadangan. Kocok kembali sisa kartu ke Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Brain Shake"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 100,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card