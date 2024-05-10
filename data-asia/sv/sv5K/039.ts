import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "タンドン",
		'zh-tw': "小炭仔",
		th: "ทันด้ง"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	dexId: [837],
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "晴れた 日は 草原に 出てきて 走りまわり 車輪のような 脚に 巻きこんだ 草を 食べる。",
		'zh-tw': "晴天時會到草原東奔西跑，然後吃掉被牠那長得像是 車輪的腳捲進去的草。",
		th: "ในวันที่อากาศแจ่มใส จะออกมาวิ่งเล่นไปทั่วทุ่งหญ้า แล้วคอยกินหญ้าที่ติดมาตามขาที่เหมือนล้อรถ"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ころがりタックル",
			'zh-tw': "滾動衝撞",
			th: "กลิ้งโจมตี"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "パワージェム",
			'zh-tw': "力量寶石",
			th: "พาวเวอร์เจม"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card