import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "คัตโรตอม",
		id: "Rotom Pemotong"
	},

	illustrator: "Amelicart",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		th: "ร่างของโรตอมที่เข้าไปในเครื่องตัดหญ้าจะเบ่งด้วยความภูมิอกภูมิใจหลังตัดดอกไม้และหญ้า",
		id: "Wujud Rotom yang masuk ke dalam mesin pemotong rumput. Pokémon ini dengan bangga dan sombong memotong habis rumput serta bunga."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "พุ่งตัวถาง",
			id: "Lari Kencang Menuai"
		},

		effect: {
			th: "ก่อนจะทำแดเมจ ทิ้ง [ไอเท็มติดโปเกมอน] และ [พลังงานพิเศษ] ที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม ทั้งหมดที่ตำแหน่งทิ้งการ์ด",
			id: "Sebelum memberikan kerusakan, buang semua Pokémon Tool dan Energi Spesial yang dikenakan pada Pokémon Bertarung lawan ke Trash."
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card