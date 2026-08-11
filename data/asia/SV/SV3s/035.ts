import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Beartic"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		id: "Pokémon karnivor yang ganas. Beartic mengembuskan udara dingin untuk membekukan dan menyimpan mangsanya saat ditangkap."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Pukulan Pilar Es"
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			id: "Frost Purge"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, buang semua Energi yang dikenakan pada Pokémon ini ke Trash."
		},

		damage: 170,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card