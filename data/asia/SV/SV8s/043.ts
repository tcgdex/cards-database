import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Walrein",
		'th-th': "โทโดเซรุกา"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	description: {
		'id-id': "Walrein membentuk kelompok yang terdiri atas 20 sampai 30 ekor. Ketika diserang musuh, pemimpin kelompok mempertaruhkan nyawanya untuk melindungi kelompok.",
		'th-th': "สร้างฝูงราว 20-30 ตัว เมื่อถูกศัตรูโจมตีจ่าฝูงจะนำตัวเข้าแลกเพื่อ ปกป้องฝูง"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'id-id': "Taring Beku",
			'th-th': "คมเขี้ยวเยือกแข็ง"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, semua Pokémon yang mengenakan 2 Energi atau kurang tidak dapat menggunakan serangan. (Termasuk Pokémon yang baru dimasukkan ke Arena.)",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนทุกตัวที่มีพลังงานติดอยู่น้อยกว่าหรือ เท่ากับ 2 ลูก จะใช้ท่าต่อสู้ไม่ได้ (รวมถึงโปเกมอนที่เพิ่งออกมาใหม่บน กระดาน)"
		},

		damage: 60,
		cost: ["Water"]
	}, {
		name: {
			'id-id': "Megaton Fall",
			'th-th': "เมกะตันฟอล"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 50.",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 50 ด้วย"
		},

		damage: 170,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card