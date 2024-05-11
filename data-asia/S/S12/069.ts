import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "托戈德瑪爾",
		th: "โทเกะเดมารุ"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		'zh-tw': "用背上的長毛來接收閃電和電氣寶可夢釋放的電擊， 然後將之儲存在電囊中。",
		th: "ด้วยขนยาวกลางหลัง เมื่อได้รับไฟฟ้าช็อตจากโปเกมอนไฟฟ้าหรือสายฟ้าจะสะสมไฟไว้ที่ถุงไฟฟ้า"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "托戈衝刺",
			th: "โทเกะแดช"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，就算這隻寶可夢【氣絕】，對手也無法獲得獎賞卡。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม แม้โปเกมอนนี้[หมดสภาพ] ฝ่ายตรงข้ามไม่สามารถหยิบการ์ดรางวัลได้"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card