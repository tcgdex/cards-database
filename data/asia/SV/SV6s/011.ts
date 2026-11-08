import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Leafeon"
	},

	illustrator: "Kuroimori",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'id-id': "Makin muda Leafeon, makin kuat aroma daun mudanya. Seiring dengan pertambahan umur, aroma Pokémon ini menjadi seperti bau daun gugur."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Berkah Daun Muda"
		},

		effect: {
			'id-id': "Pilih 1 lembar Energi Dasar {Daun} dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon Cadangan. Setelah itu, pulihkan HP Pokémon yang telah dikenakan Energi sepenuhnya."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Solar Beam"
		},

		damage: 70,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card