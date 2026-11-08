import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Gengar ex"
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 310,
	types: ["Darkness"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Kutukan Merasuk"
		},

		effect: {
			'id-id': "Selama Pokémon ini ada di Arena, tiap kali lawan mengenakan Energi dari Kartu Pegangan pada Pokémon, letakkan 2 Token Kerusakan pada Pokémon tersebut untuk tiap lembar Energi."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Trick Step"
		},

		effect: {
			'id-id': "Pemain dapat memilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu memindahkannya ke Pokémon Cadangan lawan."
		},

		damage: 160,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card