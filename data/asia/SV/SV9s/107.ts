import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คริมแกน",
		'id-id': "Druddigon"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		'th-th': "ดุร้ายและเจ้าเล่ห์ จะไปแย่งถ้ำที่โปเกมอนตัวอื่นขุด แล้วเอามาทำ เป็นที่อยู่ของตัวเอง",
		'id-id': "Druddigon buas dan licik. Pokémon ini merebut sarang yang digali oleh Pokémon lain dan menjadikannya sebagai tempat tinggal."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "มังกรเดือดคลั่ง",
			'id-id': "Gebu Naga"
		},

		effect: {
			'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[ไฟ]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่ โปเกมอน[มังกร]ฝ่ายเรา",
			'id-id': "Pilih 1 lembar Energi Dasar {Api} dari Trash sendiri, lalu kenakan pada Pokémon {Naga} sendiri."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "สแลชคลอว์",
			'id-id': "Cakar Penebas"
		},

		damage: 120,
		cost: ["Fire", "Water", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card