import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Stunfisk",
		'th-th': "มักเกียว"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		'id-id': "Stunfisk tinggal di dataran lumpur. Berkat bakteri yang hidup di lumpur, organ untuk membuat listriknya jadi berkembang.",
		'th-th': "อาศัยอยู่บริเวณหาดโคลน เชื้อโรคที่อยู่ในโคลนทำให้ร่างกายพัฒนา อวัยวะสำหรับสร้างกระแสไฟฟ้าขึ้นมา"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Pijar Pelumpuh",
			'th-th': "เปรี๊ยะปวดชา"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh. Tambah lagi, pilih 1 Energi yang dikenakan pada Pokémon tersebut, lalu buang ke Trash.",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม เป็นสภาวะ[ชา] นอกจากนั้น เลือกพลังงานที่ติดอยู่กับโปเกมอนนั้น 1 ลูก ทิ้งที่ ตำแหน่งทิ้งการ์ด"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card