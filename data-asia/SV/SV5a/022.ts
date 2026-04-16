import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "フィオネ",
		'zh-tw': "霏歐納",
		th: "ฟีโอเน"
	},

	illustrator: "aspara",
	rarity: "Common",
	category: "Pokemon",
	dexId: [489],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "海の 温度が 高くなると 頭の 浮き袋を ふくらませて 海面を 集団で 漂う。",
		'zh-tw': "當海水溫度上升時， 會讓頭部的浮囊膨脹， 集體在海面上漂流。",
		th: "เมื่อน้ำทะเลมีอุณหภูมิสูงขึ้น จะพองถุงลมที่หัว เพื่อลอยบนผิวน้ำทะเลกันเป็นกลุ่ม"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "まねきよせる",
			'zh-tw': "招喚",
			th: "เรียกมาใกล้"
		},

		effect: {
			ja: "自分のトラッシュからサポートを1枚選び、相手に見せて、手札に加える。",
			'zh-tw': "從自己的棄牌區選擇1張支援者卡，在給對手看過後加入手牌。",
			th: "เลือกการ์ดซัพพอร์ต 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ"
		}
	}, {
		cost: ["Water"],

		name: {
			ja: "エナジープレス",
			'zh-tw': "能量壓制",
			th: "เอนเนอร์จี้เพรส"
		},

		damage: "20×",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×20ダメージ。",
			'zh-tw': "造成對手的戰鬥寶可夢身上附加的能量的數量×20點傷害。",
			th: "แดเมจจะเท่ากับจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x20"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 761482
	}
}

export default card