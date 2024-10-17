import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "กูเรกกรู",
		id: "Croagunk"
	},

	illustrator: "Aliya Chen",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		th: "สู้อย่างตรงไปตรงมาน้อยครั้ง แต่นั่นก็เพื่อความอยู่รอด เป็นมาสคอตที่เป็นที่นิยมมาก",
		id: "Croagunk jarang melakukan pertarungan secara jujur dan adil, tetapi itu pun dilakukan untuk bertahan hidup. Pokémon ini populer sebagai maskot."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ทุบตี",
			id: "Memukul"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			th: "กระโดดกบ",
			id: "Lompat Katak"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20."
		},

		damage: "20+",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card