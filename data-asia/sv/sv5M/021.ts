import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "炎熱喵",
		th: "เนียฮีท"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		'zh-tw': "脖子根部的火囊在進入戰鬥狀態後火力就會上升， 並發出像鈴鐺般的聲音。",
		th: "ในยามต่อสู้ ถุงไฟตรงคอจะส่งเสียงคล้ายกระดิ่งดังออกมา และเปลวไฟจะลุกไหม้รุนแรงขึ้น"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "咬住",
			th: "กัดติด"
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "閃焰強襲",
			th: "แฟลร์สไตรค์"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「閃焰強襲」。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [แฟลร์สไตรค์] ไม่ได้"
		},

		damage: 80,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card