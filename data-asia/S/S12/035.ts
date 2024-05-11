import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "未知圖騰V",
		th: "อันโนนV"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "奇異刻印",
			th: "ตราประทับปริศนา"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]"
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "勝利象徵",
			th: "วิกทอรีซิมโบล"
		},

		effect: {
			'zh-tw': "使用這個招式時，若自己剩餘獎賞卡的張數為1張，則這場對戰己方獲勝。",
			th: "เมื่อใช้ท่าต่อสู้นี้แล้ว ถ้าจำนวนการ์ดรางวัลที่เหลือของฝ่ายเราเป็น 1 ใบ การแบตเทิลนี้ฝ่ายเราชนะ"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card