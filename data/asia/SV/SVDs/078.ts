import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เดเด็นเนะ",
		'id-id': "Dedenne"
	},

	illustrator: "zig",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'th-th': "อวัยวะผลิตกระแสไฟฟ้ามีขนาดเล็กและยังไม่พัฒนาเต็มที่เลยชอบเอาหางไปดูดไฟฟ้าจากบ้านคนเพื่อชาร์จไฟฟ้า",
		'id-id': "Dedenne mengecas dan menyerap listrik dari rumah manusia menggunakan ekornya karena tubuhnya kecil dan organ pembangkit listriknya masih belum sempurna."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "แทะพลังงาน",
			'id-id': "Menggerogoti Energi"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card