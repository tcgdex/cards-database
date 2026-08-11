import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Tandemaus"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],

	description: {
		id: "Tandemaus selalu berdua pada saat apa pun. Pokémon ini membagi dua dan memakan bersama makanan yang ditemukannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tergelincir"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card