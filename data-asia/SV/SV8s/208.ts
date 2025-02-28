import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Scovillain ex"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Tipe Ganda"
		},

		effect: {
			id: "Selama Pokémon ini ada di Arena, Pokémon ini menjadi 2 tipe yaitu {Daun} dan {Api}."
		}
	}],

	attacks: [{
		name: {
			id: "Spicy Rage"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 70 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		},

		damage: "10+",
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card