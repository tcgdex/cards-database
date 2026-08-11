import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เรเดียน",
		'id-id': "Ledian"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'th-th': "ในคืนที่ท้องฟ้ามีดวงดาวทอแสงจะกระพือปีกบินไปพร้อมกับโปรยผงระยิบระยับ",
		'id-id': "Saat bintang berkelip di langit malam, Ledian terbang melambai sambil menaburkan serbuk berkilau."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'th-th': "ลายดาวประกาย",
			'id-id': "Pola Bintang Berkilau"
		},

		effect: {
			'th-th': "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง เลือกโปเกมอนที่มี HP เหลือน้อยกว่าหรือเท่ากับ [90] บนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้",
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Pilih 1 Pokémon dengan sisa HP 90 atau kurang di Cadangan lawan, lalu tukar dengan Pokémon Bertarung."
		}
	}],

	attacks: [{
		name: {
			'th-th': "สปีดสตาร์",
			'id-id': "Speed Star"
		},

		effect: {
			'th-th': "แดเมจของท่าต่อสู้นี้ จะไม่นำจุดอ่อน ความต้านทาน และเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมาคิด",
			'id-id': "Kerusakan akibat serangan ini tidak terpengaruh oleh Kelemahan, Resistansi, dan efek yang sedang dialami Pokémon Bertarung lawan."
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