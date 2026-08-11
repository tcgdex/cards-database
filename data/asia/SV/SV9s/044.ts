import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "บาชูรุ <ของ N>",
		id: "Joltik <N>"
	},

	illustrator: "Iori Suzuki",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],

	description: {
		th: "เพราะผลิตไฟฟ้าด้วยตัวเองไม่ได้ จึงมักเกาะโปเกมอนขนาดใหญ่เพื่อ ดูดเอาประจุไฟฟ้าสถิต",
		id: "Joltik tidak dapat menghasilkan listrik sendiri sehingga Pokémon ini menempel pada Pokémon besar lain dan menyerap listrik statis."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ช็อตเปรี้ยงปร้าง",
			id: "Korsleting Berpijar-pijar"
		},

		effect: {
			th: "ก่อนจะทำแดเมจ ทิ้ง [ไอเท็มติดโปเกมอน] ที่ติดอยู่กับโปเกมอนบนตำแหน่ง ต่อสู้ฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด เมื่อทิ้งการ์ดแล้ว ทำให้โปเกมอนบน ตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			id: "Sebelum memberikan kerusakan, buang Pokémon Tool yang dikenakan pada Pokémon Bertarung lawan ke Trash. Jika dibuang ke Trash, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card