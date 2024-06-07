import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Gengar"
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		id: "Untuk merebut nyawa targetnya, Gengar menyelinap ke dalam bayangan targetnya, dan terus terdiam menunggu kesempatan."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			id: "Night Gate"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri. Tukar Pokémon Bertarung sendiri dengan Pokémon Cadangan."
		}
	}],

	attacks: [{
		name: {
			id: "Mimpi Buruk"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
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