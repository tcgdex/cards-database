import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "แซงกูส",
		'id-id': "Zangoose"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'th-th': "เป็นคู่ปรับกับฮาบูเนค หากเจอหน้ากันจะกางเล็บเท้าหน้าข่มขู่ในทันที",
		'id-id': "Hubungan Zangoose dan Seviper adalah musuh bebuyutan. Jika mereka bertemu, Pokémon ini melebarkan cakar kaki depannya dengan cepat dan mengintimidasi Seviper."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ฟันแหลก",
			'id-id': "Menyayat"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card