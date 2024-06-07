import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蘋裹龍VMAX",
		th: "แอปปริวVMAX"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "超極巨滾翻回轉",
			th: "กิกะโรลลิ่ง"
		},

		effect: {
			'zh-tw': "減少這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			th: "แดเมจของท่าต่อสู้นี้จะลดลงเท่ากับจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนตัวนี้ x10"
		},

		damage: "250-",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card