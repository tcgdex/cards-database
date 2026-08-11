import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "นัชชี",
		'id-id': "Exeggutor"
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'th-th': "พลังจิตที่หัวทั้ง 3 หัวรวมใจเป็นหนึ่งเดียวปล่อยออกมานั้นมีพลังแรง วันที่มีเมฆมากจะเคลื่อนไหวช้า",
		'id-id': "Kekuatan psikokinesis yang ditembakkan saat 3 kepala Exeggutor bekerja sama sangat kuat. Gerakannya menjadi lambat saat langit berawan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "คลื่นสะกดจิต",
			'id-id': "Aura Hipnotis"
		},

		effect: {
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			'th-th': "ไซคิกลูป",
			'id-id': "Psychic Loop"
		},

		effect: {
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก นำกลับขึ้นมือ",
			'id-id': "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu kembalikan ke Kartu Pegangan."
		},

		damage: 160,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card