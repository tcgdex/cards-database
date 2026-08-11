import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "อุลกามอธ",
		'id-id': "Volcarona"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'th-th': "ผู้คนในพื้นที่ที่อากาศร้อนจะไม่ชอบร่างที่ลุกไหม้นี้ แต่ในพื้นที่ที่หนาวเย็นจะได้รับการเทิดทูนในฐานะร่างจำแลงของพระอาทิตย์",
		'id-id': "Tubuh membara Volcarona dibenci di daerah panas, namun dipuja sebagai jelmaan matahari di daerah dingin."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "คลุมด้วยเพลิง",
			'id-id': "Mengenakan Api"
		},

		effect: {
			'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[ไฟ]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนนี้",
			'id-id': "Pilih 1 lembar Energi Dasar {Api} dari Trash sendiri, lalu kenakan pada Pokémon ini."
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			'th-th': "ฮีทบลาสต์",
			'id-id': "Heat Blast"
		},

		damage: 130,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card