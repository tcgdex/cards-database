import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "勇士雄鷹",
		th: "วอร์เกิล"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "性情粗暴、血氣方剛，因此被鋼鎧鴉奪走了伽勒爾運送員的地位。",
		th: "เลือดร้อนและหยาบคายจึงถูกอาร์เมอร์การ์ชิงตำแหน่งผู้ขนส่งแห่งกาลาร์ไป"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "勇猛之爪",
			th: "กรงเล็บองอาจ"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為進化寶可夢，則增加60點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นโปเกมอนวิวัฒนาการ การโจมตีนี้จะเพิ่มแดเมจอีก 60"
		},

		damage: "30+",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "勇鳥猛攻",
			th: "เบรฟเบิร์ด"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到50點傷害。",
			th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 50 ด้วย"
		},

		damage: 150,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card