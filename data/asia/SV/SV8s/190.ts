import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Spheal"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'id-id': "Tubuh Spheal yang sangat bulat diselimuti oleh lemak yang tebal. Pokémon ini lebih cepat menggelinding daripada berjalan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Bubuk Salju"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
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