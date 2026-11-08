import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โคโคการะ <ของฮ็อป>",
		'id-id': "Rookidee <Hop>"
	},

	illustrator: "Shinya Mizuno",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'th-th': "ตัวเมียจะขี้หงุดหงิดกว่าตัวผู้ ถ้าไปทำให้ปีกเปื้อนจะโกรธเป็นฟืน เป็นไฟและใช้จะงอยจิกไม่หยุด",
		'id-id': "Betina jauh lebih sensitif daripada yang jantan. Jika kamu mengotori sayapnya, amarah Rookidee akan membara dan ia akan terus mematukmu."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "สายตาดุ",
			'id-id': "Pandangan Garang"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนที่ได้รับท่าต่อสู้นี้ใช้ จะถูก [-20]",
			'id-id': "Pada giliran lawan berikutnya, kerusakan akibat serangan yang digunakan oleh Pokémon yang menerima serangan ini berkurang sejumlah 20."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "จิก",
			'id-id': "Mematuk"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card