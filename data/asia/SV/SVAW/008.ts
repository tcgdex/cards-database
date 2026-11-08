import { Card } from "models/database/card"
import Set from "../SVAW"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "貓鼬斬",
		'th-th': "แซงกูส",
		'id-id': "Zangoose"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "和飯匙蛇是死對頭。一旦撞見彼此，就會立刻 張開前腳的爪子來威嚇對方。",
		'th-th': "เป็นคู่ปรับกับฮาบูเนค หากเจอหน้ากันจะกางเล็บเท้าหน้าข่มขู่ในทันที",
		'id-id': "Hubungan Zangoose dan Seviper adalah musuh bebuyutan. Jika mereka bertemu, Pokémon ini melebarkan cakar kaki depannya dengan cepat dan mengintimidasi Seviper."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "劈開",
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