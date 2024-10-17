import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โอโนโนคุส",
		id: "Haxorus"
	},

	illustrator: "Tsuyoshi Nagano",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],

	description: {
		th: "จัดการศัตรูด้วยเขี้ยวอันภาคภูมิ แสนภูมิใจที่เขี้ยวตนคมชนิดที่สามารถตัดผ่าหอคอยเหล็กได้ในทีเดียว",
		id: "Haxorus menggunakan taring kebanggaannya untuk mengalahkan musuh. Ia membanggakan ketajaman taringnya yang dapat memotong menara besi dalam satu tebasan."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			th: "แอกซ์ดาวน์",
			id: "Axe Down"
		},

		effect: {
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมีพลังงานพิเศษติดอยู่ จะทำให้โปเกมอนนั้น[หมดสภาพ]",
			id: "Jika Pokémon Bertarung lawan mengenakan Energi Spesial, Pokémon tersebut KO."
		},

		cost: ["Fighting"]
	}, {
		name: {
			th: "คลื่นมังกร",
			id: "Aura Naga"
		},

		effect: {
			th: "ทิ้งการ์ด 3 ใบจากด้านบนของสำรับการ์ดฝ่ายเราที่ตำแหน่งทิ้งการ์ด",
			id: "Buang 3 kartu dari atas Deck sendiri ke Trash."
		},

		damage: 230,
		cost: ["Fighting", "Metal"]
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card