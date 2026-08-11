import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Walrein",
		th: "โทโดเซรุกา"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	description: {
		id: "Walrein membentuk kelompok yang terdiri atas 20 sampai 30 ekor. Ketika diserang musuh, pemimpin kelompok mempertaruhkan nyawanya untuk melindungi kelompok.",
		th: "สร้างฝูงราว 20-30 ตัว เมื่อถูกศัตรูโจมตีจ่าฝูงจะนำตัวเข้าแลกเพื่อ ปกป้องฝูง"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Taring Beku",
			th: "คมเขี้ยวเยือกแข็ง"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, semua Pokémon yang mengenakan 2 Energi atau kurang tidak dapat menggunakan serangan. (Termasuk Pokémon yang baru dimasukkan ke Arena.)",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนทุกตัวที่มีพลังงานติดอยู่น้อยกว่าหรือ เท่ากับ 2 ลูก จะใช้ท่าต่อสู้ไม่ได้ (รวมถึงโปเกมอนที่เพิ่งออกมาใหม่บน กระดาน)"
		},

		damage: 60,
		cost: ["Water"]
	}, {
		name: {
			id: "Megaton Fall",
			th: "เมกะตันฟอล"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 50.",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 50 ด้วย"
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