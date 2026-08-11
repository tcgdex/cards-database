import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Ceruledge",
		'th-th': "โซเบลดส์"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'id-id': "Wujud evolusi Charcadet menjadi Ceruledge oleh zirah kuno yang diselimuti dendam. Pokémon ini menebas musuhnya tanpa ampun.",
		'th-th': "ร่างที่วิวัฒนาการด้วยชุดเกราะเก่าแก่ที่เต็มไปด้วยความแค้น ฟาดฟัน ศัตรูอย่างไร้ความปรานี"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Blaze Curse",
			'th-th': "เปลวเพลิงสาป"
		},

		effect: {
			'id-id': "Buang semua Energi Spesial yang dikenakan pada semua Pokémon lawan ke Trash.",
			'th-th': "ทิ้งพลังงานพิเศษที่ติดอยู่กับโปเกมอนฝ่ายตรงข้ามทุกตัว ทั้งหมดที่ตำแหน่ง ทิ้งการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Sabetan Api Hitam",
			'th-th': "เพลิงกาฬตัด"
		},

		effect: {
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		},

		damage: 160,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card