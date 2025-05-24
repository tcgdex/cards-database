import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "คริมแกน",
		id: "Druddigon"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		th: "ดุร้ายและเจ้าเล่ห์ จะไปแย่งถ้ำที่โปเกมอนตัวอื่นขุด แล้วเอามาทำ เป็นที่อยู่ของตัวเอง",
		id: "Druddigon buas dan licik. Pokémon ini merebut sarang yang digali oleh Pokémon lain dan menjadikannya sebagai tempat tinggal."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "มังกรเดือดคลั่ง",
			id: "Gebu Naga"
		},

		effect: {
			th: "เลือกการ์ด [พลังงานพื้นฐาน[ไฟ]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่ โปเกมอน[มังกร]ฝ่ายเรา",
			id: "Pilih 1 lembar Energi Dasar {Api} dari Trash sendiri, lalu kenakan pada Pokémon {Naga} sendiri."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			th: "สแลชคลอว์",
			id: "Cakar Penebas"
		},

		damage: 120,
		cost: ["Fire", "Water", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card