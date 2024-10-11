import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Sunkern"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		id: "Pokémon ini sangat lemah. Meskipun diserang, Sunkern baru dapat mengusir musuhnya setelah bersusah payah memutar daunnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Peluru Biji"
		},

		effect: {
			id: "Lempar koin 4 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "10×",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card