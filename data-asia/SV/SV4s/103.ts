import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Porygon2"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		id: "Setelah dipasangi fungsi kecerdasan buatan, Porygon2 mulai saling berbincang menggunakan bahasa yang hanya dipahami oleh mereka."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Power Ball"
		},

		effect: {
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 50,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card