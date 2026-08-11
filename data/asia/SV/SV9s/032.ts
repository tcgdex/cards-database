import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ออคตัน",
		'id-id': "Octillery"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'th-th': "มีหัวแข็งทนเหมือนก้อนหิน พันอีกฝ่ายด้วยหนวดที่มีปุ่มดูดแล้วใช้หัวทุบ แบบไม่ยั้ง",
		'id-id': "Kepala batunya kukuh. Octillery mengikat lawan menggunakan kakinya yang dilengkapi dengan pengisap, lalu senantiasa menghantam lawan tersebut dengan kepalanya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "อควาวอชเชอร์",
			'id-id': "Aqua Washer"
		},

		effect: {
			'th-th': "หากต้องการ เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก นำกลับขึ้นมือฝ่ายตรงข้าม",
			'id-id': "Pemain dapat memilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu mengembalikannya ke Kartu Pegangan lawan."
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			'th-th': "ต่อยยับ",
			'id-id': "Pukulan Gurita"
		},

		effect: {
			'th-th': "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x90",
			'id-id': "Lempar koin hingga hasilnya sisi belakang. Serangan ini memberikan kerusakan sejumlah 90 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "90×",
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card