import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "サルノリ",
		'zh-tw': "敲音猴",
		th: "ซารุโนริ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Tomomi Ozaki",
	dexId: [810],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "特別な スティックで リズムを 刻むと 草花を 元気にする パワーが 音波になって 広がる。",
		'zh-tw': "當牠用特別的木棒敲奏時， 能夠給予花草活力的力量 就會變成音波擴散開來。",
		th: "เมื่อใช้แท่งไม้พิเศษเคาะจังหวะดนตรี พลังที่ทำให้ต้นไม้ดอกไม้ร่าเริงจะกลายเป็นคลื่นเสียงแผ่ขยายออกไป"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "けとばす",
			'zh-tw': "踢飛",
			th: "ดีด"
		},

		damage: 10
	}, {
		cost: ["Grass", "Grass"],

		name: {
			ja: "えだづき",
			'zh-tw': "木枝突刺",
			th: "ต่อกิ่ง"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card