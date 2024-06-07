import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Porygon"
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		id: "Belakangan Porygon berperan besar di dunia maya. Pokémon ini berkeliling mengecek untuk memastikan tidak ada data yang mencurigakan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menyingkirkan Data"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu pindahkan ke Pokémon Cadangan lawan."
		},

		damage: 10,
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