import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โอลองเกะ",
		id: "Grimmsnarl"
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		th: "อาศัยอยู่ในป่าลึก แม้ว่าจะวิวัฒนาการจนดูน่าเกรงขาม แต่ก็ไม่เลิกนิสัยทำเรื่องไร้สาระและกลั่นแกล้งคนอยู่ดี",
		id: "Grimmsnarl hidup di pedalaman hutan. Pokémon ini tidak pernah berhenti berbuat usil meskipun telah berevolusi dengan baik."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			th: "ยั่วยุคว้าหมับ",
			id: "Cengkeraman Memancing Emosi"
		},

		effect: {
			th: "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอนบนเบนช์ (ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้) หลังจากนั้น ทำแดเมจ 160 กับโปเกมอนที่เพิ่งออกมาใหม่",
			id: "Tukar Pokémon Bertarung lawan dengan Pokémon Cadangan. (Pokémon yang akan dimasukkan ke Arena Bertarung dipilih oleh lawan.) Setelah itu, berikan kerusakan sejumlah 160 kepada Pokémon Bertarung yang baru."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "กำหมัดชก",
			id: "Pukulan Bogem Mentah"
		},

		effect: {
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 160,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card