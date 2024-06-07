import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大舌舔",
		th: "เบโรเบลท์"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		'zh-tw': "比起手腳，牠更加擅長使用舌頭。就算是１粒小小的豆子，牠也能靈巧地用舌頭撿起來。",
		th: "ถนัดใช้ลิ้นมากกว่าแขนขา โดยสามารถเก็บเม็ดถั่วเล็ก ๆ 1 เมล็ดได้อย่างง่ายดาย"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "大舌選擇",
			th: "แลบลิ้นเลือก"
		},

		effect: {
			'zh-tw': "對手將對手自己的牌庫上方3張卡丟棄。或者對手選擇3張對手自己的手牌，將其丟棄。",
			th: "ฝ่ายตรงข้ามทิ้งการ์ด 3 ใบจากด้านบนสุดของสำรับการ์ดฝ่ายตรงข้ามเอง ที่ตำแหน่งทิ้งการ์ด หรือฝ่ายตรงข้ามเลือกการ์ด 3 ใบจากการ์ดบนมือฝ่ายตรงข้ามเอง ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "抛擲",
			th: "ขว้างกระเด็น"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			th: "ให้ฝ่ายตรงข้ามสลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอน 1 ตัวบนเบนช์ฝ่ายตรงข้าม [ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้]"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card