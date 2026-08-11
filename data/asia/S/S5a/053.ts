import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "滑滑小子",
		th: "ซึรุกกุ"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "用結實的皮保護身體。據說在皮伸展到極限時，牠就會開始進化。",
		th: "มีหนังที่แข็งทนทานปกป้องร่างกาย ว่ากันว่าจะเข้าสู่การวิวัฒนาการเมื่อหนังนี้ยืดเต็มที่แล้ว"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "硬頭",
			th: "หัวแข็ง"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-10」點。",
			th: "ในเทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-10]"
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card