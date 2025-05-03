import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Grafaiai",
		th: "ทากิงกูลู"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		id: "Setiap Grafaiai melukiskan pola yang berbeda-beda dan mereka akan terus melukiskan pola yang sama seumur hidupnya.",
		th: "ลวดลายที่ทากิงกูลูวาดจะแตกต่างกันไปตามแต่ละตัว โดยมันจะวาด ลวดลายเดิมไปเรื่อย ๆ ตลอดชีวิต"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Mengecat Jahil",
			th: "วาดซุกซน"
		},

		effect: {
			id: "Pilih paling banyak 3 lembar Energi dari Trash lawan, lalu kenakan sesukanya pada Pokémon lawan.",
			th: "เลือกการ์ดพลังงานได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายตรงข้าม ติดที่ โปเกมอนฝ่ายตรงข้ามตามชอบ"
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Energy Graffiti",
			th: "เอนเนอร์จี้กราฟฟิตี้"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 40 untuk tiap Energi yang dikenakan pada semua Pokémon lawan.",
			th: "แดเมจจะเท่ากับจำนวนพลังงานที่ติดอยู่กับโปเกมอนฝ่ายตรงข้ามทุกตัว x40"
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