import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雙卵細胞球",
		'th-th': "ดาบูลัน",
		'ja-jp': "ダブラン"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說當牠的２個大腦意見一致時，發出的念力 可以覆蓋方圓１公里的範圍。",
		'th-th': "พลังจิตในตอนที่ความเห็นของสมองทั้งสองเหมือนกันจะมีพลังกระจายไปได้ถึง 1 กิโลเมตรโดยรอบ",
		'ja-jp': "２つの 脳みその 意見が 一致したときの 念力は 周囲１キロに およぶと いう。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "細胞尖槍",
			'th-th': "เซลล์สเปียร์",
			'ja-jp': "セルスピア"
		},

		effect: {
			'zh-tw': "在對手的1隻備戰寶可夢身上放置2個傷害指示物。",
			'th-th': "วางตัวนับแดเมจ 2 ตัวบนโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว",
			'ja-jp': "相手のベンチポケモン1匹に、ダメカンを2個のせる。"
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
		value: "－30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 680180,
				tcgplayer: 570099,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [578],
}

export default card