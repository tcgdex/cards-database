import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "妙喵",
		th: "เนียสเปอร์"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "雖然擁有可以彈飛職業摔角選手的精神力量，卻因無法好好控制而感到煩惱。",
		th: "ซ่อนพลังจิตไว้ข้างในซึ่งมีพลังมากถึงขนาดเป่านักมวยปล้ำให้กระเด็นไปได้ แต่ก็ลำบากเพราะควบคุมพลังไม่ได้"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "祈求",
			th: "อธิษฐาน"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20"
		},

		damage: "20+",
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card