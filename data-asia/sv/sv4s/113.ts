import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Tandemaus"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 30,
	types: ["Colorless"],

	description: {
		id: "Tandemaus selalu berdua pada saat apa pun. Pokémon ini membagi dua dan memakan bersama makanan yang ditemukannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Damage Rush"
		},

		effect: {
			id: "Lempar koin hingga hasilnya sisi belakang. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card