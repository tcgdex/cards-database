import { Card } from "models/database/card"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ปีกไล้พสุธา",
		'id-id': "Slither Wing"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'th-th': "โปเกมอนปริศนาที่มีบางจุดคล้ายคลึงกับสิ่งมีชีวิตที่ถูกเรียกว่าปีกไล้พสุธาในหนังสือเก่าแก่",
		'id-id': "Pokémon misterius yang memiliki kemiripan dengan makhluk hidup bernama Slither Wing yang diperkenalkan dalam sebuah buku kuno."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "บดเหล็ก",
			'id-id': "Pelumat Besi"
		},

		effect: {
			'th-th': "ถ้าบนกระดานฝ่ายตรงข้ามมีโปเกมอน [อนาคต] อยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			'id-id': "Jika ada Pokémon Futur di Arena lawan, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "20+",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'th-th': "สแมชวิง",
			'id-id': "Smash Wing"
		},

		effect: {
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card