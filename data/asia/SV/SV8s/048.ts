import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Quaxly",
		th: "แคว็กซ์"
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		id: "Quaxly memiliki kekuatan kaki yang membuatnya tetap dapat berenang dengan bebas di sungai berarus kencang sekalipun. Pokémon ini menyukai kebersihan dan sering berlebihan dalam berprasangka.",
		th: "มีพลังขาที่แข็งแรง สามารถว่ายน้ำไปมาในแม่น้ำที่มีกระแสเชี่ยวกราก ได้อย่างอิสระ รักความสะอาดและชอบคิดมาก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Jungkiran Walet",
			th: "คมมีดบูมเมอแรง"
		},

		effect: {
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 20.",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20"
		},

		damage: "10+",
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card