import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Grafaiai",
		'th-th': "ทากิงกูลู"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'id-id': "Setiap Grafaiai melukiskan pola yang berbeda-beda dan mereka akan terus melukiskan pola yang sama seumur hidupnya.",
		'th-th': "ลวดลายที่ทากิงกูลูวาดจะแตกต่างกันไปตามแต่ละตัว โดยมันจะวาด ลวดลายเดิมไปเรื่อย ๆ ตลอดชีวิต"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Mengecat Jahil",
			'th-th': "วาดซุกซน"
		},

		effect: {
			'id-id': "Pilih paling banyak 3 lembar Energi dari Trash lawan, lalu kenakan sesukanya pada Pokémon lawan.",
			'th-th': "เลือกการ์ดพลังงานได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายตรงข้าม ติดที่ โปเกมอนฝ่ายตรงข้ามตามชอบ"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Energy Graffiti",
			'th-th': "เอนเนอร์จี้กราฟฟิตี้"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan sejumlah 40 untuk tiap Energi yang dikenakan pada semua Pokémon lawan.",
			'th-th': "แดเมจจะเท่ากับจำนวนพลังงานที่ติดอยู่กับโปเกมอนฝ่ายตรงข้ามทุกตัว x40"
		},

		damage: "40×",
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card