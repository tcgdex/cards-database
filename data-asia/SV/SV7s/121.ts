import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "คิวเรม",
		id: "Kyurem"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],

	description: {
		th: "มีพลังที่เหนือยิ่งกว่าเรชิรัมและเซครอม หากแต่ถูกไอเย็นอุณหภูมิต่ำสุดขั้วผนึกเอาไว้",
		id: "Kyurem memiliki kekuatan yang bahkan melampaui Reshiram dan Zekrom, tetapi kekuatannya tersegel oleh hawa dingin bersuhu sangat rendah."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			th: "แอนติพลาสมา",
			id: "Anti Plasma"
		},

		effect: {
			th: "ถ้าบนตำแหน่งทิ้งการ์ดฝ่ายตรงข้าม มีการ์ดที่มีคำว่า [อโครมา] บนชื่ออยู่ พลังงานสำหรับใช้ [ไตรฟรอสต์] ของโปเกมอนนี้ จะเป็นพลังงาน[ไร้สี] 1 ลูก",
			id: "Jika ada kartu yang pada namanya terdapat kata Colress di Trash lawan, Energi yang dibutuhkan oleh Pokémon ini untuk menggunakan Tri Frost menjadi 1 Energi {Bening}."
		}
	}],

	attacks: [{
		name: {
			th: "ไตรฟรอสต์",
			id: "Tri Frost"
		},

		effect: {
			th: "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมดที่ตำแหน่งทิ้งการ์ด โปเกมอนฝ่ายตรงข้าม 3 ตัว จะได้รับแดเมจตัวละ 110 {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Buang semua Energi yang dikenakan pada Pokémon ini ke Trash, serangan ini memberikan kerusakan masing-masing sejumlah 110 kepada 3 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Water", "Water", "Metal", "Metal", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card