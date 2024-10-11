import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Bellibolt"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		id: "Meskipun terlihat seperti bola mata, sebenarnya itu adalah organ pelepasan listrik Bellibolt yang digunakan untuk menembakkan listrik yang dihasilkan dari pusar dinamo di perutnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Sengatan Listrik"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			id: "Lightning Ball"
		},

		damage: 130,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card