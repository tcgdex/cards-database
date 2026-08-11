import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鋼鎧鴉VMAX",
		th: "อาร์เมอร์การ์VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 320,
	types: ["Metal"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "潔淨之軀",
			th: "ลัสเตอร์บอดี้"
		},

		effect: {
			'zh-tw': "這隻寶可夢不會受到對手的寶可夢的特性的效果的影響。",
			th: "โปเกมอนนี้จะไม่ได้รับเอฟเฟกต์จากความสามารถของโปเกมอนฝ่ายตรงข้าม"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "超極巨風狂暴雨",
			th: "กิกะเฮอริเคน"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「超極巨風狂暴雨」。",
			th: "ในเทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่า [กิกะเฮอริเคน] ไม่ได้"
		},

		damage: 240,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card