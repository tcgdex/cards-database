import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Chansey"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'id-id': "Chansey selalu berjalan dengan hati-hati agar telur yang dibawanya tidak pecah. Namun Pokémon ini melarikan diri dengan cepat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Lucky Attach"
		},

		effect: {
			'id-id': "Pilih 1 lembar Energi Dasar dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Kekuatan Laten"
		},

		effect: {
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card