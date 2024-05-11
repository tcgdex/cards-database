import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大鋼蛇",
		th: "ฮากาเนล"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 190,
	types: ["Metal"],

	description: {
		'zh-tw': "人們認為牠的身體是因為堆積了和泥土一起吞下的鐵質，才會發生變化的。",
		th: "เชื่อกันว่าร่างกายเปลี่ยนรูปไปเนื่องมาจากธาตุเหล็กที่กินเข้าไปพร้อมกับดิน"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "鋼鐵橫掃",
			th: "สวิงเหล็ก"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×80點傷害。",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x80"
		},

		damage: "80×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "重磅衝擊",
			th: "เฮวี่อิมแพ็คท์"
		},

		damage: 200,
		cost: ["Metal", "Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card