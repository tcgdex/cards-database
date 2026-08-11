import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "音箱蟀V",
		th: "โคโรท็อกV"
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "激動舞台",
			th: "เอ็กไซต์สเตจ"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從牌庫抽卡直到自己的手牌滿3張為止。若這隻寶可夢在戰鬥場上，則抽卡直到滿4張為止。在這個回合，若已經使出了其他的「激動舞台」，則這個特性無法使用。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเราเป็น 3 ใบ ถ้าโปเกมอนนี้อยู่บนตำแหน่งต่อสู้ ให้จั่วจนได้การ์ด 4 ใบ เทิร์นนี้ ถ้าใช้ [เอ็กไซต์สเตจ] ใบอื่นไปแล้ว จะใช้ความสามารถนี้ไม่ได้"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "十字剪",
			th: "ซิสเซอร์ครอส"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加80點傷害。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 80"
		},

		damage: "80+",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card