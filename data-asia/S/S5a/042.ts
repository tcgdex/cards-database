import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 死神板",
		th: "กาลาร์ เดธเบิร์น"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "絕對不能觸摸牠影子般的身體，否則牠會讓你看到印刻在牠畫中的恐怖記憶。",
		th: "ห้ามสัมผัสร่างกายคล้ายเงา มันจะเอาความทรงจำอันน่ากลัวที่สลักอยู่ในภาพให้ดู"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "怨恨石板",
			th: "แผ่นหินแห่งความแค้น"
		},

		effect: {
			'zh-tw': "當這隻寶可夢在戰鬥場上受到對手的「寶可夢【VMAX】」招式的傷害時，將與受到的傷害相同數值的傷害指示物，放置於使用招式的寶可夢身上。",
			th: "เมื่อโปเกมอนนี้อยู่บนตำแหน่งต่อสู้ และได้รับแดเมจจากท่าต่อสู้ของ [โปเกมอน [VMAX]] ของฝ่ายตรงข้าม วางตัวนับแดเมจบนโปเกมอนที่ใช้ท่าต่อสู้ ตามจำนวนแดเมจที่ได้รับมา"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "能量壓制",
			th: "เอนเนอร์จี้เพรส"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×20點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x20"
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card