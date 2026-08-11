import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Nosepass"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'id-id': "Ketika terpojok, adakalanya ia melindungi dirinya dengan meningkatkan kekuatan magnetnya dan menarik bongkahan besi yang ada di sekitarnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Power Rush"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi belakang, pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card