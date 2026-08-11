import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คานุจัง",
		'id-id': "Tinkatink"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'th-th': "เหวี่ยงค้อนทำมือเพื่อป้องกันตัว แต่มักถูกโปเกมอนที่กินโลหะแย่งไป",
		'id-id': "Tinkatink mengayunkan palu buatannya untuk melindungi dirinya, namun palu tersebut sering direbut oleh Pokémon pemakan logam."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ทุบแตก",
			'id-id': "Melumatkan"
		},

		effect: {
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card