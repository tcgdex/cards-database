import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "อบูริบง <ของลิเลีย>",
		id: "Ribombee <Lillie>"
	},

	illustrator: "mashu",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		th: "เมื่อจับความรู้สึกท้อแท้หดหู่ของคนหรือโปเกมอนได้ จะให้กำลังใจ อีกฝ่ายด้วยก้อนละอองเกสรที่มันปั้นขึ้นมาเอง",
		id: "Ketika merasakan perasaan dari manusia atau Pokémon yang sedang depresi, ia menyemangati mereka dengan bola serbuk sari buatannya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			th: "กะพริบตาชักชวน",
			id: "Kedipan Mengundang"
		},

		effect: {
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง ดูการ์ดบนมือฝ่ายตรงข้าม เลือกการ์ดโปเกมอน[พื้นฐาน]จากในนั้นตามจำนวน ที่ชอบ วางบนเบนช์ฝ่ายตรงข้าม",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Lihat Kartu Pegangan lawan, pilih sesukanya Pokémon Basic di antaranya, lalu masukkan ke Cadangan lawan."
		}
	}],

	attacks: [{
		name: {
			th: "เมจิคัลช็อต",
			id: "Magical Shot"
		},

		damage: 50,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "I"
}

export default card