import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火焰鳥",
		th: "ไฟเยอร์"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'zh-tw': "每當牠拍動翅膀，羽毛就會閃爍出美麗的赤紅火焰。 是傳說的鳥寶可夢之一。",
		th: "เป็นหนึ่งในโปเกมอนนกในตำนานที่เปลวเพลิงตรงปีกนั้นจะส่องประกายสีแดงอย่างงดงามเมื่อกระพือปีก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "烈火之翼",
			th: "ปีกไฟลุกโชน"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則增加70點傷害。這個招式的傷害不計算弱點。",
			th: "ถ้าโปเกมอนนี้มีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 70 แดเมจของท่าต่อสู้นี้ไม่นำจุดอ่อนมาคิด"
		},

		damage: "20+",
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card