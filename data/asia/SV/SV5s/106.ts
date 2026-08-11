import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Lickitung"
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		id: "Air liur lengket Lickitung yang dibiarkan menempel di tubuh lama-lama akan menjadi gatal luar biasa dan rasa gatal ini tidak akan hilang."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Lidah Penarik"
		},

		effect: {
			id: "Lihat Kartu Pegangan lawan, pilih paling banyak 2 lembar Pokémon Basic di antaranya, lalu masukkan ke Cadangan lawan."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Tenaga Super"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card