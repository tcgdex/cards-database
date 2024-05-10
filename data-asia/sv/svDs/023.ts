import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "ฮิโตโมชิ",
		id: "Litwick"
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		th: "ถ้าชีวิตที่มันสูบเข้าไปยิ่งอ่อนวัย เปลวไฟบนหัวจะลุกโชนขึ้นอย่างน่าประหลาด",
		id: "Makin muda umur dari nyawa yang diisap oleh Litwick, makin besar dan mistis pula kobaran api di kepalanya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "เป่าไฟ",
			id: "Meniupkan Api"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 10",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 10."
		},

		damage: "10+",
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card