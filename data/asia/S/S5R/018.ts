import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "海刺龍",
		th: "ซีดรา"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "這種寶可夢可以藉著快速擺動翅膀和尾巴，在面向前方的情況下向後游動。",
		th: "โปเกมอนที่ขยับปีกและหางได้อย่างรวดเร็วและก็สามารถว่ายน้ำถอยหลังได้ขณะที่หันมองไปข้างหน้า"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "水槍",
			th: "ปืนฉีดน้ำ"
		},

		damage: 40,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card