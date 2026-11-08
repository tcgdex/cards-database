import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Eevee"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'id-id': "Eevee berpotensi untuk berevolusi ke berbagai macam wujud untuk segera dapat beradaptasi terhadap perubahan lingkungan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Dukungan"
		},

		effect: {
			'id-id': "Pilih 1 lembar Energi dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Kick"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card