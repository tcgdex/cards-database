import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Milotic ex",
		'th-th': "มิโลคารอสex"
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Sisik Gemerlap",
			'th-th': "เกล็ดส่องประกาย"
		},

		effect: {
			'id-id': "Pokémon ini tidak menerima kerusakan dan efek akibat serangan dari Pokémon Terastal lawan.",
			'th-th': "โปเกมอนนี้ จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้จากโปเกมอน [เทรัสตัล] ฝ่ายตรงข้าม"
		}
	}],

	attacks: [{
		name: {
			'id-id': "Hypnosplash",
			'th-th': "ฮิปโนสแปลช"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur.",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]"
		},

		damage: 160,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card