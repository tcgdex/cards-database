import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "太陽岩",
		th: "โซลร็อก",
		ja: "ソルロック"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "當牠旋轉自己的身體時，會發出太陽般的光芒， 讓敵人的眼睛暫時失明。",
		th: "เมื่อหมุนร่างกายจะปล่อยแสงราวพระอาทิตย์ทำให้ศัตรูแสบตา",
		ja: "体を 回転 させると 太陽の ような 光を 放ち 敵の 目を 眩ませる。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "太陽能量",
			th: "ซันเอนเนอร์จี้",
			ja: "サンエナジー"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的棄牌區選擇1張【超】能量卡，附於自己的「月石」身上。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดพลังงาน[พลังจิต] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่ [ลูนาโทน] ฝ่ายเรา",
			ja: "自分の番に1回使える。自分のトラッシュからエネルギーを1枚選び、自分の「ルナトーン」につける。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "迴轉攻擊",
			th: "โจมตีหมุนวน",
			ja: "かいてんアタック"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [338],

	thirdParty: {
		cardmarket: 687636
	}
}

export default card