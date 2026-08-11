import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "地鼠",
		th: "ดิกดา"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],

	description: {
		'zh-tw': "在地下較淺的地方移動。被牠挖掘過的地面會鼓起來，所以非常容易發現。",
		th: "เคลื่อนที่ใต้ดินบริเวณตื้น ๆ รู้ได้ทันทีเพราะว่าหลังจากขุดไปเรื่อย ๆ พื้นดินจะนูนขึ้นมา"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "挖洞",
			th: "ขุดรู"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว ในเทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนตัวนี้จะไม่ได้รับแดเมจและเอฟเฟกต์จากท่าต่อสู้"
		},

		damage: 10,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card