import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Heliolisk"
	},

	illustrator: "Atsuya Uki",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		id: "Dahulu kala, Heliolisk menjadi Pokémon kesayangan di negara padang pasir yang telah musnah. Mereka datang ke Daerah Galar bersama dengan harta pusaka."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Wild Volt"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 20."
		},

		damage: 70,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card