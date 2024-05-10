import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "แซงกูส",
		id: "Zangoose"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		th: "เป็นคู่ปรับกับฮาบูเนค หากเจอหน้ากันจะกางเล็บเท้าหน้าข่มขู่ในทันที",
		id: "Hubungan Zangoose dan Seviper adalah musuh bebuyutan. Jika mereka bertemu, Pokémon ini melebarkan cakar kaki depannya dengan cepat dan mengintimidasi Seviper."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ฟันแหลก",
			id: "Menyayat"
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