import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "起源帕路奇亞VSTAR",
		th: "พัลเกียดั้งเดิมVSTAR",
		ja: "オリジンパルキアVSTAR"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 280,
	types: ["Water"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "星星入口",
			th: "สตาร์พอร์ทัล"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。從自己的棄牌區選擇最多3張【水】能量卡，以任意方式附於自己的【水】寶可夢身上。[對戰中，己方只可使用1次【VSTAR】力量。]",
			th: "ใช้ได้ในเทิร์นฝ่ายเรา เลือกการ์ดพลังงาน[น้ำ]ได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอน[น้ำ]ฝ่ายเราตามชอบ {ในระหว่างการแบตเทิล ฝ่ายเราใช้พลัง【VSTAR】ได้ 1 ครั้งเท่านั้น}"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "亞空潮漩",
			th: "เกลียวคลื่นแห่งมิติ",
			ja: "あくうのうねり"
		},

		effect: {
			'zh-tw': "增加雙方的備戰寶可夢的數量×20點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนโปเกมอนบนเบนช์ของทั้งสองฝ่าย x20",
			ja: "おたがいのベンチポケモンの数×20ダメージ追加。"
		},

		damage: "60＋",
		cost: ["Water", "Water"]
	}, {
		name: {
			ja: "特性"
		}
	}, {
		name: {
			ja: "スターポータル"
		},

		effect: {
			ja: "自分の番に使える。自分のトラッシュからエネルギーを3枚まで選び、自分のポケモンに好きなようにつける。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card