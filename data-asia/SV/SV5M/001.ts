import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飛天螳螂",
		th: "สไตรค์"
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "雙手的鐮刀鋒利無比，砍斷越多堅硬的東西， 其鋒利程度也會隨之提升。",
		th: "ยิ่งใช้เคียวคมที่แขนทั้งสองตัดของแข็งมากเท่าไหร่ เคียวก็จะยิ่งคมมากขึ้นเท่านั้น"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "切",
			th: "ตัดฉับ"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "猛擊在地",
			th: "สแลชดาวน์"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「猛擊在地」。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [สแลชดาวน์] ไม่ได้"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card