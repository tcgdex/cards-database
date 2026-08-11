import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Darmanitan"
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		id: "Pokémon yang cepat naik darah. Pukulan yang diluncurkan oleh lengan Darmanitan yang besar dapat menghancurkan truk jungkit hingga berkeping-keping."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Tubrukan Menggelinding"
		},

		damage: 60,
		cost: ["Fire", "Fire"]
	}, {
		name: {
			id: "Terjangan Kobar Api"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 70."
		},

		damage: 210,
		cost: ["Fire", "Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card