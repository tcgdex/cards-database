import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โมโมวาโร่ex",
		id: "Pecharunt ex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			th: "โซ่ครอบงำ",
			id: "Rantai Dominasi"
		},

		effect: {
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกโปเกมอน[ความมืด]บนเบนช์ฝ่ายเรา (ยกเว้น [โมโมวาโร่【ex】]) 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้ หลังจากนั้น ทำให้โปเกมอนใหม่บนตำแหน่งต่อสู้เป็นสภาวะ[พิษ] เทิร์นนี้ ถ้าใช้ [โซ่ครอบงำ] ใบอื่นไปแล้ว จะใช้ความสามารถนี้ไม่ได้",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 Pokémon {Kegelapan} (selain Pecharunt {ex}) di Cadangan sendiri, lalu tukar dengan Pokémon Bertarung. Setelah itu, ubah kondisi Pokémon Bertarung yang baru menjadi Racun. Jika pada giliran ini, Rantai Dominasi lainnya telah digunakan, Ability ini tidak dapat digunakan."
		}
	}],

	attacks: [{
		name: {
			th: "หงุดหงิดระเบิด",
			id: "Ledakan Marah-marah"
		},

		effect: {
			th: "แดเมจจะเท่ากับจำนวนการ์ดรางวัลที่ฝ่ายตรงข้ามหยิบไปแล้ว x60",
			id: "Serangan ini memberikan kerusakan sejumlah 60 untuk tiap lembar Kartu Point yang telah diambil lawan."
		},

		damage: "60×",
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card