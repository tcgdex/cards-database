import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "กิเกียร์ <ของ N>",
		id: "Klang <N>"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		th: "เวลาเอาจริงเฟืองด้านนอกของเฟืองใหญ่กับเฟืองเล็กจะประกบกัน ความเร็วในการหมุนจะเพิ่มขึ้นอย่างก้าวกระโดด",
		id: "Saat sedang serius, gerigi di sisi luar roda gigi besar dan roda gigi kecil akan saling bertepatan. Kecepatan putar Klang akan meningkat drastis."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "เกียร์หมุนหมุน",
			id: "Gir Berputar-putar"
		},

		effect: {
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			th: "ตั้งใจสู้",
			id: "Menentang"
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