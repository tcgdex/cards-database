import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "แกรนบูล",
		id: "Granbull"
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		th: "เป็นที่นิยมในหมู่สาว ๆ แต่นอกจากจะขี้ขลาดแล้วยังละเอียดอ่อน จึงใช้เป็นหมาเฝ้าบ้านไม่ได้",
		id: "Walaupun populer di antara gadis muda, Granbull tidak berbakat sebagai anjing penjaga karena Pokémon ini penakut dan sensitif."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ตั้งใจสู้",
			id: "Menentang"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			th: "ไวลด์แท็กเกิล",
			id: "Wild Tackle"
		},

		effect: {
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 30."
		},

		damage: 160,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card