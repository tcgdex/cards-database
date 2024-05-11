import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "波士可多拉",
		th: "บอสโกโดรา"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		'zh-tw': "在撞擊敵人的同時，會用能刺穿厚鐵板的銳利尖角 給予對方致命的一擊。",
		th: "จัดการศัตรูด้วยการซัดเขาที่แหลมคมขนาดเสียบทะลุแผ่นเหล็กหนาได้เข้าใส่ พร้อม ๆ กับพุ่งตัวกระแทก"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "反擊壓制",
			th: "เคาน์เตอร์เพรส"
		},

		effect: {
			'zh-tw': "在下個對手的回合，當這隻寶可夢受到招式的傷害時，將與受到的傷害相同數值的傷害指示物，放置於使用招式的寶可夢身上。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนนี้ได้รับแดเมจจากท่าต่อสู้ วางตัวนับแดเมจบนโปเกมอนที่ใช้ท่าต่อสู้ ตามจำนวนแดเมจที่ได้รับมา"
		},

		damage: 90,
		cost: ["Metal", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "重磅衝擊",
			th: "เฮวี่อิมแพ็คท์"
		},

		damage: 180,
		cost: ["Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card