import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "基格爾德",
		th: "ซีการ์ด"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		'zh-tw': "各地的基格爾德・細胞聚集了１０％之後所誕生。 擅長近距離戰鬥。",
		th: "เกิดขึ้นมาจากซีการ์ดเซล แต่ละที่มารวมตัวกัน 10％ ถนัดการต่อสู้ระยะประชิด"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "力之吶喊",
			th: "เสียงตะโกนแห่งพลัง"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張基本能量卡，附於備戰寶可夢身上。",
			th: "เลือกการ์ดพลังงานพื้นฐาน 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์"
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "高速攻擊",
			th: "สปีดแอทแทก"
		},

		damage: 70,
		cost: ["Grass", "Fighting"]
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card