import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "智揮猩",
		th: "ยาเรยูตัน"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "智揮猩能夠透過揮動由樹葉和體毛所製成的扇子， 隨心所欲地指揮寶可夢。",
		th: "เมื่อโบกพัดนำทัพที่ทำจากใบไม้และขนจากร่าง จะสามารถควบคุมโปเกมอนได้ตามใจชอบ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "猴戲",
			th: "ละครลิง"
		},

		effect: {
			'zh-tw': "選擇1張對手的棄牌區的支援者卡，將那個效果作為這個招式的效果使用。",
			th: "เลือกการ์ดซัพพอร์ตบนตำแหน่งทิ้งการ์ดฝ่ายตรงข้าม 1 ใบ ใช้เอฟเฟกต์นั้นเป็นเอฟเฟกต์ของท่าต่อสู้นี้ได้"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "頭突",
			th: "ตบหนัก"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card