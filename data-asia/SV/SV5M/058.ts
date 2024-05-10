import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咕咕鴿",
		th: "ฮาโทโบ"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		'zh-tw': "飛行速度不可小覷。無論飛到多遠的地方， 都會記得自己的主人和巢。",
		th: "ความเร็วในการบินบนฟ้าจัดว่าดี แม้จะห่างไปไกลแค่ไหนก็ยังจำเจ้าของและรังของตัวเองได้"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "高速飛行",
			th: "บินเร็วจี๋"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "噴射之翼",
			th: "เจ็ตวิง"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card