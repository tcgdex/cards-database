import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "บาร์เรียด",
		id: "Mr. Mime"
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		th: "ถนัดเล่นละครใบ้ สร้างกำแพงด้วยคลื่นที่ออกจากนิ้วเพื่อป้องกันตัว จากการโจมตีหลากหลายแบบ",
		id: "Pintar memainkan pantomim. Mr. Mime membuat dinding menggunakan gelombang yang dikeluarkan dari jarinya untuk melindungi dirinya dari serangan lawan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ลอกเลียน",
			id: "Mimik"
		},

		effect: {
			th: "นำการ์ดบนมือฝ่ายเราทั้งหมดใส่กลับไปในสำรับการ์ดแล้วสับ หลังจากนั้น จั่ว การ์ดจากสำรับการ์ดฝ่ายเรา ตามจำนวนการ์ดบนมือฝ่ายตรงข้าม",
			id: "Kocok kembali semua Kartu Pegangan sendiri ke Deck. Setelah itu, ambil kartu dari atas Deck sendiri untuk tiap lembar Kartu Pegangan lawan."
		},

		cost: ["Psychic"]
	}, {
		name: {
			th: "จิตตานุภาพ",
			id: "Psikokinesis"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม เป็นสภาวะ[ชา]",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 40,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card