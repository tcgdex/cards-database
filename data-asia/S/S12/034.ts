import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉艾勒奇VMAX",
		th: "เรจิเอเลคิVMAX"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "電晶體",
			th: "ทรานซิสเตอร์"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的【雷】屬性的【基礎】寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+30」點。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ แดเมจของท่าต่อสู้ที่โปเกมอน[พื้นฐาน]ประเภท[สายฟ้า]ฝ่ายเราใช้ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม จะถูก [+30]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "極巨雷電",
			th: "ไดทันเดอร์ไลท์นิง"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		},

		damage: 220,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "F"
}

export default card