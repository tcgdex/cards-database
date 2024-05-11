import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拉普拉斯",
		th: "ลาพลาซ"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "頭腦聰慧，心地善良的寶可夢。會一邊以優美的聲音歌唱， 一邊暢游在大海之上。",
		th: "โปเกมอนที่ฉลาดและใจดี ร้องเพลงด้วยเสียงอันไพเราะพร้อมกับว่ายไปบนผิวน้ำทะเล"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "激狂冰凍",
			th: "เรจจิงฟรีซ"
		},

		effect: {
			'zh-tw': "若在上個對手的回合，自己的寶可夢因招式的傷害而【氣絕】了，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ในเทิร์นก่อนของฝ่ายตรงข้าม ถ้าโปเกมอนฝ่ายเรา[หมดสภาพ]จากแดเมจของท่าต่อสู้ จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]"
		},

		damage: 110,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card