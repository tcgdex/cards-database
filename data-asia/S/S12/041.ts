import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雙卵細胞球",
		th: "ดาบูลัน"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說當牠的２個大腦意見一致時，發出的念力 可以覆蓋方圓１公里的範圍。",
		th: "พลังจิตในตอนที่ความเห็นของสมองทั้งสองเหมือนกันจะมีพลังกระจายไปได้ถึง 1 กิโลเมตรโดยรอบ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "細胞尖槍",
			th: "เซลล์สเปียร์"
		},

		effect: {
			'zh-tw': "在對手的1隻備戰寶可夢身上放置2個傷害指示物。",
			th: "วางตัวนับแดเมจ 2 ตัวบนโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card