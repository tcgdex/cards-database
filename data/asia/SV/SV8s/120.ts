import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Alolan Diglett",
		'th-th': "อโลลา ดิกดา"
	},

	illustrator: "Akino Fukuji",
	category: "Pokemon",
	hp: 50,
	types: ["Metal"],

	description: {
		'id-id': "Kumis keemasannya memiliki fitur sensorik. Ia mengeluarkan kumis dari lubang dan mendeteksi keadaan sekitar dengannya.",
		'th-th': "หนวดสีทองนั้นมีฟังก์ชันเซนเซอร์ มันจะยื่นหนวดออกมาจากรูเพื่อ ตรวจสอบบริเวณโดยรอบ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Serangan Kejutan",
			'th-th': "จู่โจมกะทันหัน"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal.",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card