import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Frosmoth"
	},

	illustrator: "rika",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'id-id': "Frosmoth mendeteksi arus udara menggunakan antenanya. Pokémon ini mencampurkan udara dingin ke debu sisiknya dan diturunkan seperti salju."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Hawa Dingin Pembeku"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat menggunakan serangan."
		},

		damage: 100,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card