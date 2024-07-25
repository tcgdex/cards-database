import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Chandelure"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		id: "Chandelure mengisap roh dan membakarnya. Ia mengayunkan api di lengannya dan membuat lawannya terhipnotis."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			id: "Penerangan Penjerat"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri. Kedua pemain masing-masing mengambil 1 kartu dari atas Deck."
		}
	}],

	attacks: [{
		name: {
			id: "Mind Ruler"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lembar Kartu Pegangan lawan."
		},

		damage: "30×",
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card