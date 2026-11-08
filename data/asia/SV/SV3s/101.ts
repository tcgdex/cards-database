import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Gengar"
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'id-id': "Untuk merebut nyawa targetnya, Gengar menyelinap ke dalam bayangan targetnya, dan terus terdiam menunggu kesempatan."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Night Gate"
		},

		effect: {
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri. Tukar Pokémon Bertarung sendiri dengan Pokémon Cadangan."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Mimpi Buruk"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		},

		damage: 100,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card