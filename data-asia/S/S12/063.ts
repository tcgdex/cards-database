import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 喵喵",
		th: "กาลาร์ เนียส"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'zh-tw': "和好戰的海洋民族一起生活，久而久之身體的各個地方 就都變成了黑鐵。",
		th: "ถูกฝึกให้แข็งแกร่งในระหว่างที่อาศัยกับชนเผ่ามหาสมุทรผู้ก้าวร้าว หลายส่วนของร่างกายกลายเป็นเหล็กกล้า"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "出爪",
			th: "กางเล็บ"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20"
		},

		damage: "10+",
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card