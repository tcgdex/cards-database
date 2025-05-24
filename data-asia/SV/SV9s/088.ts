import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "โกรอนดะ",
		id: "Pangoro"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		th: "ใช้ใบไม้อ่านการเคลื่อนไหวของคู่ต่อสู้ ใช้หมัดเดียวบดรถบรรทุก เทท้ายขนาดใหญ่ให้เป็นเศษ ๆ ได้",
		id: "Pangoro membaca gerakan lawan menggunakan daunnya. Ia memiliki pukulan yang mampu membuat truk jungkit besar sekalipun menjadi rongsokan dengan sekali pukul."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ตอกย้ำซ้ำเติม",
			id: "Cari Gara-gara"
		},

		effect: {
			th: "เลือกท่าต่อสู้ที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมี 1 ท่า เทิร์นถัดไปของ ฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะใช้ท่าต่อสู้ที่ถูกเลือกไว้ไม่ได้",
			id: "Pilih 1 serangan yang dimiliki Pokémon Bertarung lawan. Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat menggunakan serangan yang telah dipilih."
		},

		damage: 30,
		cost: ["Darkness"]
	}, {
		name: {
			th: "พาวเวอร์แท็กเกิล",
			id: "Power Tackle"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan."
		},

		damage: 160,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card