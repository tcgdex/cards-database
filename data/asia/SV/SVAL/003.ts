import { Card } from "models/database/card"
import Set from "../SVAL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "炙燙鱷",
		'th-th': "อาจิเกเตอร์",
		'id-id': "Crocalor"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		'zh-tw': "聲帶和火囊的閥緊鄰在一起。會一邊發出嘶啞的聲音， 一邊噴灑火焰。",
		'th-th': "เส้นเสียงและวาล์วของถุงไฟมีความสัมพันธ์กันอย่างใกล้ชิด พ่นไฟออกมาพร้อมกับส่งเสียงแหบ",
		'id-id': "Katup pita suara dan kantong api Crocalor saling terhubung. Pokémon ini menyemburkan api sambil mengeluarkan suara serak."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "咬住",
			'th-th': "กัดติด",
			'id-id': "Menggigit"
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'zh-tw': "滾動衝撞",
			'th-th': "กลิ้งโจมตี",
			'id-id': "Tubrukan Menggelinding"
		},

		damage: 100,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card