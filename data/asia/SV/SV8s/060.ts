import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Rotom",
		'th-th': "โรตอม"
	},

	illustrator: "Shinya Mizuno",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		'id-id': "Rotom adalah Pokémon yang telah diteliti dalam jangka waktu panjang sebagai sumber tenaga penggerak motor khusus.",
		'th-th': "โปเกมอนที่ถูกวิจัยมายาวนานในฐานะแหล่งพลังงานขับเคลื่อนมอเตอร์ พิเศษ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Crush Pulse",
			'th-th': "แครชพัลส์"
		},

		effect: {
			'id-id': "Lihat Kartu Pegangan lawan, lalu buang semua Item dan Pokémon Tool yang ada di antaranya ke Trash.",
			'th-th': "ดูการ์ดบนมือฝ่ายตรงข้าม ทิ้งการ์ด [ไอเท็ม] และ การ์ด [ไอเท็มติดโปเกมอน] ที่อยู่ในนั้น ทั้งหมดที่ตำแหน่งทิ้งการ์ด"
		},

		cost: ["Lightning"]
	}, {
		name: {
			'id-id': "Energy Short",
			'th-th': "เอนเนอร์จี้ช็อต"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan.",
			'th-th': "แดเมจจะเท่ากับจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่าย ตรงข้าม x20"
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