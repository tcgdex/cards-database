import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Wattrel"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'id-id': "Wattrel membuat sarangnya pada tebing di pesisir pantai. Sarang Pokémon ini populer dengan tekstur dan rasanya yang renyah nan unik."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Sengatan Listrik"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card