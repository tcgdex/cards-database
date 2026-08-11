import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "獨角蟲",
		th: "บีเดิล"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		'zh-tw': "毒針非常厲害。鮮豔的體色是用來警告對手的。",
		th: "เข็มพิษมันมีพิษรุนแรงมาก สีสันตามตัวที่ดูเด่นสะดุดตาก็เพื่อทำให้ฝ่ายตรงข้ามคอยระวังตัว"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "突刺",
			th: "แทง"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card