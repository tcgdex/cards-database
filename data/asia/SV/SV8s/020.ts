import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Castform Wujud Matahari",
		'th-th': "โปวาลุน ร่างพระอาทิตย์"
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'id-id': "Wujud Castform pada hari yang cerah. Pada percobaan meletakkannya di depan pemanas, Pokémon ini tidak berubah menjadi wujud ini.",
		'th-th': "ร่างของโปวาลุนในวันที่อากาศแจ่มใส ในการทดลองที่วางมันไว้หน้า ฮีตเตอร์ มันก็ไม่เปลี่ยนเป็นร่างนี้"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menghanguskan",
			'th-th': "เผา"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar.",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]"
		},

		cost: ["Fire"]
	}, {
		name: {
			'id-id': "Sunny Assist",
			'th-th': "ซันนีแอสซิสต์"
		},

		effect: {
			'id-id': "Pindahkan semua Energi yang dikenakan pada Pokémon ini ke 1 Pokémon Cadangan.",
			'th-th': "นำพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมด ย้ายไปติดกับโปเกมอนบนเบนช์ 1 ตัว"
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card