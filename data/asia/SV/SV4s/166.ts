import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Aegislash ex"
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 330,
	types: ["Metal"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Peerless Edge"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan sejumlah 70 untuk tiap lembar Kartu Point yang telah diambil pemain."
		},

		damage: "70×",
		cost: ["Metal"]
	}, {
		name: {
			'id-id': "Sabetan Luka Bersama"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 30."
		},

		damage: 220,
		cost: ["Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card