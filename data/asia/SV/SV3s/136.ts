import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Altaria"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		'id-id': "Jika ada orang yang sehati dengannya, Altaria akan memeluk orang tersebut dengan sayap lembut dan indahnya, lalu bersenandung."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Melayang Rendah"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Lagu Tidur Nyenyak"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur. Jumlah lemparan koin yang harus dilakukan akibat kondisi Tidur ini menjadi 2 kali dan kondisi ini tidak pulih jika semuanya bukan sisi depan."
		},

		damage: 110,
		cost: ["Water", "Metal"]
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card