import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Rotom",
		th: "โรตอม"
	},

	illustrator: "Shinya Mizuno",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		id: "Rotom adalah Pokémon yang telah diteliti dalam jangka waktu panjang sebagai sumber tenaga penggerak motor khusus.",
		th: "โปเกมอนที่ถูกวิจัยมายาวนานในฐานะแหล่งพลังงานขับเคลื่อนมอเตอร์ พิเศษ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Crush Pulse",
			th: "แครชพัลส์"
		},

		effect: {
			id: "Lihat Kartu Pegangan lawan, lalu buang semua Item dan Pokémon Tool yang ada di antaranya ke Trash.",
			th: "ดูการ์ดบนมือฝ่ายตรงข้าม ทิ้งการ์ด [ไอเท็ม] และ การ์ด [ไอเท็มติดโปเกมอน] ที่อยู่ในนั้น ทั้งหมดที่ตำแหน่งทิ้งการ์ด"
		},

		cost: ["Lightning"]
	}, {
		name: {
			id: "Energy Short",
			th: "เอนเนอร์จี้ช็อต"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan.",
			th: "แดเมจจะเท่ากับจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่าย ตรงข้าม x20"
		},

		damage: "20×",
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card