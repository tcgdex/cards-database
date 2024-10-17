import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เรเดียน",
		id: "Ledian"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		th: "ในคืนที่ท้องฟ้ามีดวงดาวทอแสงจะกระพือปีกบินไปพร้อมกับโปรยผงระยิบระยับ",
		id: "Saat bintang berkelip di langit malam, Ledian terbang melambai sambil menaburkan serbuk berkilau."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			th: "ลายดาวประกาย",
			id: "Pola Bintang Berkilau"
		},

		effect: {
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง เลือกโปเกมอนที่มี HP เหลือน้อยกว่าหรือเท่ากับ [90] บนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Pilih 1 Pokémon dengan sisa HP 90 atau kurang di Cadangan lawan, lalu tukar dengan Pokémon Bertarung."
		}
	}],

	attacks: [{
		name: {
			th: "สปีดสตาร์",
			id: "Speed Star"
		},

		effect: {
			th: "แดเมจของท่าต่อสู้นี้ จะไม่นำจุดอ่อน ความต้านทาน และเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมาคิด",
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh Kelemahan, Resistansi, dan efek yang sedang dialami Pokémon Bertarung lawan."
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card