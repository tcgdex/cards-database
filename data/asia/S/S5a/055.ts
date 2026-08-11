import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "一擊武道熊師",
		th: "วูลาโอส จู่โจมครั้งเดียว"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		'zh-tw': "棲息在遙遠地區的山岳地帶。會在斷崖絕壁上來回奔跑鍛鍊下盤，磨練招式。",
		th: "อาศัยอยู่ในเทือกเขาของภูมิภาคอันห่างไกล วิ่งขึ้นหน้าผาสูงชันเพื่อฝึกกำลังขากับเอว และฝึกฝนท่าต่อสู้"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "場地粉碎",
			th: "ทำลายสนาม"
		},

		effect: {
			'zh-tw': "將場上的對手的競技場卡丟棄。",
			th: "ทิ้งการ์ดสเตเดียมฝ่ายตรงข้ามที่วางบนกระดานบนตำแหน่งทิ้งการ์ด"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			'zh-tw': "修羅拳",
			th: "หมัดชูร่า"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則增加100點傷害。",
			th: "ถ้าโปเกมอนนี้มีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 100"
		},

		damage: "100+",
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card