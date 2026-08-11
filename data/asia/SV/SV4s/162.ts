import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Iron Valiant ex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			id: "Tachyon Bit"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri saat Pokémon ini masuk dari Cadangan ke Arena Bertarung. Letakkan 2 Token Kerusakan pada 1 Pokémon lawan."
		}
	}],

	attacks: [{
		name: {
			id: "Laser Blade"
		},

		effect: {
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 200,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card