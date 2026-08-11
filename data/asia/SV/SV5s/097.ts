import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Beldum"
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'id-id': "Beldum menghasilkan kekuatan magnet dari bagian belakang tubuhnya untuk mengisap musuh mendekat dengan kuat lalu menusuknya hingga tembus dengan cakarnya yang tajam."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Memasang Cakar"
		},

		damage: 10,
		cost: ["Metal"]
	}, {
		name: {
			'id-id': "Iron Tackle"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 10."
		},

		damage: 50,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card