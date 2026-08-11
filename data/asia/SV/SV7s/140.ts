import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ไบวูลู",
		'id-id': "Dubwool"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'th-th': "พรมที่ถักจากขนที่มีความยืดหยุ่น เมื่อขึ้นไปจะเด้งได้เหมือนแทรมโพลีน",
		'id-id': "Karpet yang ditenun menggunakan bulu Dubwool elastis bagaikan trampolin, sehingga yang menaiki karpet tersebut dapat lompat-lompat memantul."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "ขนอ่อนนุ่ม",
			'id-id': "Wol Lembut"
		},

		effect: {
			'th-th': "แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]",
			'id-id': "Kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		}
	}],

	attacks: [{
		name: {
			'th-th': "ชนทลาย",
			'id-id': "Meruntuhkan"
		},

		effect: {
			'th-th': "หากต้องการ ทิ้งการ์ดสเตเดียมที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Pemain dapat membuang Stadium yang ada di Arena ke Trash."
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card