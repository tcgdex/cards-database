import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "サルノリ",
		id: "Grookey",
		th: "ซารุโนริ",
		'zh-tw': "敲音猴",
		'zh-cn': "敲音猴"
	},

	illustrator: "Tomomi Ozaki",
	rarity: "None",
	category: "Pokemon",
	dexId: [810],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "特別な スティックで リズムを 刻むと 草花を 元気にする パワーが 音波になって 広がる。",
		id: "Ketika Grookey mengetuk irama dengan stik spesialnya, kekuatan yang membuat tumbuhan sehat akan menjadi gelombang suara dan meluas.",
		th: "เมื่อใช้แท่งไม้พิเศษเคาะจังหวะดนตรี พลังที่ทำให้ต้นไม้ดอกไม้ร่าเริงจะกลายเป็นคลื่นเสียงแผ่ขยายออกไป",
		'zh-tw': "當牠用特別的木棒敲奏時， 能夠給予花草活力的力量 就會變成音波擴散開來。",
		'zh-cn': "當牠用特別的木棒敲奏時， 能夠給予花草活力的力量 就會變成音波擴散開來。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "けとばす",
			id: "Tendangan Penghempas",
			th: "ดีด",
			'zh-tw': "踢飛",
			'zh-cn': "踢飛"
		},

		damage: 10
	}, {
		cost: ["Grass", "Grass"],

		name: {
			ja: "えだづき",
			id: "Tusukan Ranting",
			th: "ต่อกิ่ง",
			'zh-tw': "木枝突刺",
			'zh-cn': "木枝突刺"
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