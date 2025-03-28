import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เอ็นนิวท์",
		id: "Salazzle"
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		th: "หากฝูงของเอ็นนิวท์บังเอิญเจอกันจะเกิดศึกชิงตัวผู้กันโดยใช้แก๊สฟีโรโมน",
		id: "Jika kelompok Salazzle saling bertemu, akan terjadi pertarungan gas feromon untuk memperebutkan Salandit jantan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ลนไฟฉับพลัน",
			id: "Panggang Tiba-tiba"
		},

		effect: {
			th: "ฝ่ายตรงข้ามเลือกการ์ดบนมือฝ่ายตรงข้ามเอง 1 ใบ ทิ้งที่ตำแหน่งทิ้งการ์ด เทิร์นนี้ ถ้าโปเกมอนนี้วิวัฒนาการมาจาก [ยาโทโมริ] แล้ว จะทิ้งการ์ดเพิ่มได้ 2 ใบที่ตำแหน่งทิ้งการ์ด",
			id: "Lawan memilih 1 lembar Kartu Pegangannya, lalu membuangnya ke Trash. Jika pada giliran ini, Pokémon ini berevolusi dari Salandit, buang lagi 2 kartu tambahan ke Trash."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "พ่นไฟ",
			id: "Semburan Api"
		},

		effect: {
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 130,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card