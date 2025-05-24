import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "บัตเตอร์ฟรี",
		id: "Butterfree"
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		th: "บินเก็บน้ำหวานของดอกไม้ทุกวัน มีนิสัยชอบทาน้ำหวานฝังเข้าไปใน ขนอ่อนที่ขาแล้วนำกลับรัง",
		id: "Butterfree setiap hari berkeliling mengumpulkan madu. Memiliki kebiasaan mengoleskan madu ke bulu kakinya untuk dibawa pulang ke sarang."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			th: "เฮอริเคนเกล็ดปีก",
			id: "Hurikan Debu Sisik"
		},

		effect: {
			th: "ทอยเหรียญ 4 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x60 ถ้าออกหัว มากกว่าหรือเท่ากับ 2 ครั้ง จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม เป็นสภาวะ[ชา]",
			id: "Lempar koin 4 kali. Serangan ini memberikan kerusakan sejumlah 60 untuk tiap lemparan dengan hasil sisi depan. Jika hasilnya sisi depan 2 kali atau lebih, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: "60×",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card