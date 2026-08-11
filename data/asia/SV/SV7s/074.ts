import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โดไซดอน",
		'id-id': "Rhyperior"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 200,
	types: ["Fighting"],

	description: {
		'th-th': "แม้จะมีสมองที่เล็กยิ่งกว่าไซดอน แต่ก็เอาพลังงานที่เหลือทั้งหมดไปลงกับการต่อสู้ มันจึงแข็งแกร่งเป็นอย่างมาก",
		'id-id': "Otaknya memang lebih kecil daripada Rhydon, tetapi ia kuat karena menggunakan sejumlah energi sebagai pengganti ukuran otaknya tersebut untuk bertarung."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "ไวด์วอลล์",
			'id-id': "Wide Wall"
		},

		effect: {
			'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ โปเกมอนฝ่ายเราทุกตัว จะไม่ได้รับเอฟเฟกต์ เมื่อฝ่ายตรงข้ามนำการ์ดซัพพอร์ตจากบนมือออกมาใช้",
			'id-id': "Selama Pokémon ini ada di Arena Bertarung, saat lawan memainkan Supporter dari Kartu Pegangan, semua Pokémon sendiri tidak menerima efek dari Supporter tersebut."
		}
	}],

	attacks: [{
		name: {
			'th-th': "ดริลไลน์เนอร์",
			'id-id': "Drill Liner"
		},

		effect: {
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		},

		damage: 180,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card