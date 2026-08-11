import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Zangoose",
		th: "แซงกูส"
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		id: "Bulu Zangoose berdiri dan ia mengambil posisi bertarung jika bertemu dengan Seviper. Cakar tajamnya adalah senjata terkuatnya.",
		th: "พอเจอฮาบูเนค ขนทั่วตัวจะชูชันเตรียมพร้อมโจมตี กรงเล็บแหลมคม เป็นอาวุธที่ดีที่สุดของมัน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Sabetan Beruntun",
			th: "ตัดต่อเนื่อง"
		},

		effect: {
			id: "Lempar koin 3 kali. Jika hasilnya sisi depan 1 kali, kerusakan yang diberikan bertambah sejumlah 20. Jika hasilnya sisi depan 2 kali, kerusakan yang diberikan bertambah sejumlah 50. Jika semuanya sisi depan, kerusakan yang diberikan bertambah sejumlah 80.",
			th: "ทอยเหรียญ 3 ครั้ง ถ้าออกหัว 1 ครั้ง การโจมตีนี้จะเพิ่มแดเมจอีก 20 ถ้า ออกหัว 2 ครั้ง การโจมตีนี้จะเพิ่มแดเมจอีก 50 ถ้าออกหัวทั้งหมด การโจมตีนี้ จะเพิ่มแดเมจอีก 80"
		},

		damage: "10+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card