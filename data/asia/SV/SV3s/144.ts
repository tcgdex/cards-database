import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Swablu"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'id-id': "Swablu tidak pernah lupa untuk merawat sayapnya yang bagaikan kapas sutera. Jika sayapnya kotor, Pokémon ini akan mandi dan mencucinya hingga bersih."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Pelindung Lembut Empuk"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 20."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Mengepak"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card