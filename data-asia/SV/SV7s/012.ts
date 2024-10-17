import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "อโกจิมูชิ",
		id: "Grubbin"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		th: "พ่นใยเหนียวหนืดไปพันกับกิ่งไม้ จากนั้นก็เหวี่ยงตัวแบบลูกตุ้มเพื่อข้ามไปมาระหว่างต้นไม้อย่างคล่องแคล่ว",
		id: "Ia memuntahkan benang yang lengket dan menggulungnya ke ranting pohon, lalu dengan lincah melompat dan berpindah dari pohon ke pohon dengan gerakan seperti pendulum."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ซุ่มโจมตี",
			id: "Menyergap"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 30",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 30."
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card