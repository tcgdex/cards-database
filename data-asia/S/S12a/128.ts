import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 索羅亞克V",
		th: "ฮิซุย โซโรอาร์คV",
		ja: "ヒスイ ゾロアークV"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "虛無折返",
			th: "กลับสู่ความว่างเปล่า",
			ja: "うつろがえり"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。",
			th: "หากต้องการ สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。"
		},

		damage: 30
	}, {
		name: {
			'zh-tw': "暗影旋風",
			th: "ชาโดว์ไซโคลน",
			ja: "シャドーサイクロン"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์",
			ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card