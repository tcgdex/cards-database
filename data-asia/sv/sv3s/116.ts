import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Nickit"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		id: "Nickit selalu waspada dan licik. Ketika mencuri makanan, Pokémon ini kabur sambil menghapus jejak kaki menggunakan ekornya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Serangan Kejutan"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card