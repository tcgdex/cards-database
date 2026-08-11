import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "กิเกียร์ <ของ N>",
		'id-id': "Klang <N>"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'th-th': "เวลาเอาจริงเฟืองด้านนอกของเฟืองใหญ่กับเฟืองเล็กจะประกบกัน ความเร็วในการหมุนจะเพิ่มขึ้นอย่างก้าวกระโดด",
		'id-id': "Saat sedang serius, gerigi di sisi luar roda gigi besar dan roda gigi kecil akan saling bertepatan. Kecepatan putar Klang akan meningkat drastis."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "เกียร์หมุนหมุน",
			'id-id': "Gir Berputar-putar"
		},

		effect: {
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "ตั้งใจสู้",
			'id-id': "Menentang"
		},

		damage: 40,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card