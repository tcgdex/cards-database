import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Spheal"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		id: "Tubuh Spheal yang sangat bulat diselimuti oleh lemak yang tebal. Pokémon ini lebih cepat menggelinding daripada berjalan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Bubuk Salju"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card