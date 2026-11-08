import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เฮลการ์",
		'id-id': "Houndoom"
	},

	illustrator: "burari",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'th-th': "โปเกมอนที่ได้ยินเสียงหอนชวนขนลุกของมันจะสั่นกลัวและรีบกลับรังของตนอย่างรวดเร็ว",
		'id-id': "Pokémon yang mendengar suara lolongan menyeramkan Houndoom bergetar ketakutan dan langsung kembali ke sarang secepatnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "กัดติด",
			'id-id': "Menggigit"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'th-th': "บาร์กเอาต์",
			'id-id': "Menggeram"
		},

		effect: {
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนที่ได้รับท่าต่อสู้นี้ใช้จะถูก [-100]",
			'id-id': "Pada giliran lawan berikutnya, kerusakan akibat serangan yang digunakan oleh Pokémon yang menerima serangan ini berkurang sejumlah 100."
		},

		damage: 100,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card