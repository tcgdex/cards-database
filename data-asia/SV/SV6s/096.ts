import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Fezandipiti"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		id: "Ia merebut hati dan memikat manusia serta Pokémon dengan mengepakkan sayapnya yang ayu dan menebarkan feromon."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Adrenaline Pheromone"
		},

		effect: {
			id: "Jika Pokémon ini mengenakan Energi {Kegelapan}, saat Pokémon ini menerima kerusakan akibat serangan, pemain melempar koin 1 kali. Jika hasilnya sisi depan, Pokémon ini tidak menerima kerusakan tersebut."
		}
	}],

	attacks: [{
		name: {
			id: "Energy Feather"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 30 untuk tiap Energi yang dikenakan pada Pokémon ini."
		},

		damage: "30×",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card