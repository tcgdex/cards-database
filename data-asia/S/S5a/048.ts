import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飯匙蛇",
		th: "ฮาบูเนค"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		'zh-tw': "總是用岩石打磨尾巴上的刀刃，所以刀刃非常鋒利。和貓鼬斬是死對頭。",
		th: "ลับดาบบนหางด้วยหินผาอยู่ตลอดเวลาจึงคมกริบ เป็นคู่บาดหมางกับแซงกูส"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "怪力尾",
			th: "หางทรงพลัง"
		},

		effect: {
			'zh-tw': "在這個回合，若從手牌使出了「一擊」支援者，則增加90點傷害。",
			th: "ในเทิร์นนี้ ถ้านำการ์ดซัพพอร์ต จากบนมือออกมาใช้แล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 90"
		},

		damage: "90+",
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card