import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "จุปเป็ตตะ",
		'id-id': "Banette"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'th-th': "จิตเคียดแค้นสั่งสมในตัวตุ๊กตาที่ถูกทิ้งจนกลายเป็นโปเกมอน พบเจอได้ ในตรอกมืดสลัว",
		'id-id': "Perasaan dendam terkumpul pada boneka yang dibuang dan berubah menjadi Pokémon. Banette dapat dijumpai di lorong jalan yang gelap."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "ถ้อยคำสาปแช่ง",
			'id-id': "Kata-kata Kutukan"
		},

		effect: {
			'th-th': "ฝ่ายตรงข้ามเลือกการ์ดบนมือฝ่ายตรงข้ามเอง 3 ใบ ใส่กลับไปในสำรับการ์ด แล้วสับ",
			'id-id': "Lawan memilih 3 lembar Kartu Pegangannya, lalu mengocoknya kembali ke Deck."
		},

		cost: ["Psychic"]
	}, {
		name: {
			'th-th': "ฮอลโลว์ช็อต",
			'id-id': "Hollow Shot"
		},

		damage: 70,
		cost: ["Psychic", "Colorless"]
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
	regulationMark: "I"
}

export default card