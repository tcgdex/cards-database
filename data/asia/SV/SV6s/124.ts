import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Varoom"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'id-id': "Tubuh baja Varoom adalah tubuh aslinya. Pokémon ini menempel di batu, mengubah kandungan batu tersebut menjadi energinya, lalu beraktivitas."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Metal Coating"
		},

		effect: {
			'id-id': "Pilih 1 lembar Energi Dasar {Logam} dari Trash sendiri, lalu kenakan pada Pokémon ini."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Menyeruduk"
		},

		damage: 50,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card