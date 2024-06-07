import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Relicanth"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		id: "Relicanth bertahan mengatasi tekanan air laut dalam menggunakan sisiknya yang sekeras bebatuan dan kantong apungnya yang penuh tertimbun lemak."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Menyelami Ingatan"
		},

		effect: {
			id: "Selama Pokémon ini ada di Arena, semua Pokémon sendiri yang telah berevolusi dapat menggunakan semua serangan yang dimiliki sebelum evolusi. [Pemain tetap membutuhkan Energi untuk menggunakan serangan tersebut.]"
		}
	}],

	attacks: [{
		name: {
			id: "Sirip Pemotong"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card