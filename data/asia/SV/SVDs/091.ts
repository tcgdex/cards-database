import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ริคุคุราเกะ",
		'id-id': "Toedscruel"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'th-th': "อาศัยอยู่เป็นกลุ่มโดยสร้างอาณานิคมในป่าลึก เกลียดการที่มีคนนอกเข้ามาใกล้เป็นอย่างมาก",
		'id-id': "Toedscruel hidup berkelompok dan membentuk koloni di dalam hutan. Pokémon ini sangat membenci kedatangan makhluk asing."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "ตี",
			'id-id': "Menghantam"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'th-th': "ดับเบิลวิป",
			'id-id': "Double Whip"
		},

		effect: {
			'th-th': "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x100",
			'id-id': "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 100 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "100×",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card