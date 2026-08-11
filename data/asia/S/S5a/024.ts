import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷鳥龍VMAX",
		th: "พัจจิรากอนVMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Lightning"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "陷阱電光",
			th: "แทรปสปาร์ก"
		},

		effect: {
			'zh-tw': "在下個對手的回合，當這隻寶可夢受到招式的傷害時，在使用招式的寶可夢身上放置12個傷害指示物。",
			th: "ในเทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนนี้ได้รับแดเมจจากท่าต่อสู้ วางตัวนับแดเมจ 12 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้"
		},

		damage: 60,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "極巨衝撞",
			th: "ไดอิมแพค"
		},

		damage: 200,
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card