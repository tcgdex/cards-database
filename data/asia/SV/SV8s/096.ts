import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Primeape",
		'th-th': "โอโคริซารุ"
	},

	illustrator: "Felicia Chen",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'id-id': "Menurut teori dari salah seorang peneliti, tampaknya Primeape juga mengamuk ketika berada di dalam Bola Pokémon.",
		'th-th': "มีทฤษฎีของนักวิจัยคนหนึ่งที่ว่าโอโคริซารุจะยังโกรธอยู่แม้ตอนอยู่ใน มอนสเตอร์บอลก็ตาม"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Sapuan Kaki",
			'th-th': "เตะตัดขา"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash.",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			'id-id': "Pukulan Megaton",
			'th-th': "เมกะตันพันช์"
		},

		damage: 70,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card