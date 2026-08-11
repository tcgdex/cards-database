import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เดเด็นเนะ",
		'id-id': "Dedenne"
	},

	illustrator: "Nelnal",
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
			'th-th': "กัดติดบาดแผล",
			'id-id': "Menggigit Luka"
		},

		effect: {
			'th-th': "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x10",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan."
		},

		damage: "30+",
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card