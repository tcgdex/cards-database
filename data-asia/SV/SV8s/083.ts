import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Meowstic",
		th: "เนียโอนิกซ์"
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		id: "Jika Meowstic terus mengeluarkan kekuatan psikokinesisnya yang kuat, fisiknya juga akan mengalami kerusakan.",
		th: "เมื่อเนียโอนิกซ์ปล่อยพลังจิตอันทรงพลังออกมาเรื่อย ๆ กายเนื้อของ มันก็จะได้รับความเสียหายไปด้วยเช่นกัน"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Ekor Mengundang",
			th: "หางเชื้อเชิญ"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri jika membuang 1 lembar Mainan Santai dari Kartu Pegangan sendiri ke Trash. Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung.",
			th: "ในเทิร์นฝ่ายเรา ถ้าทิ้งการ์ด [ไม้หยอกเรื่อยเฉื่อย] 1 ใบจากบนมือฝ่ายเรา ที่ตำแหน่งทิ้งการ์ด ใช้ได้ 1 ครั้ง เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้"
		}
	}],

	attacks: [{
		name: {
			id: "Psyshot",
			th: "ไซโคช็อต"
		},

		damage: 80,
		cost: ["Psychic", "Colorless", "Colorless"]
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
	regulationMark: "H"
}

export default card