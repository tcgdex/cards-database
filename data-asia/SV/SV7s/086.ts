import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ปีกไล้พสุธา",
		id: "Slither Wing"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		th: "โปเกมอนปริศนาที่มีบางจุดคล้ายคลึงกับสิ่งมีชีวิตที่ถูกเรียกว่าปีกไล้พสุธาในหนังสือเก่าแก่",
		id: "Pokémon misterius yang memiliki kemiripan dengan makhluk hidup bernama Slither Wing yang diperkenalkan dalam sebuah buku kuno."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "บดเหล็ก",
			id: "Pelumat Besi"
		},

		effect: {
			th: "ถ้าบนกระดานฝ่ายตรงข้ามมีโปเกมอน [อนาคต] อยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			id: "Jika ada Pokémon Futur di Arena lawan, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "20+",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			th: "สแมชวิง",
			id: "Smash Wing"
		},

		effect: {
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
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