import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大尾狸",
		th: "บีดารุ",
		ja: "ビーダル"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "用樹幹和泥巴築起水壩，堵住河流建造住所。 以勤勞而聞名。",
		th: "จะสร้างที่อยู่อาศัยโดยใช้เขื่อนที่ทำมาจากกิ่งไม้หรือโคลนปิดกั้นแม่น้ำ เป็นที่รู้จักกันดีว่าเป็นคนขยัน",
		ja: "川を 木の幹や 泥の ダムで せき止めて 住処を 作る。 働き者として 知られている。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "勤勞門牙",
			th: "ฟันหน้าทำงาน",
			ja: "はたらくまえば"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次。從牌庫抽卡直到自己的手牌滿5張為止。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเราเป็น 5 ใบ",
			ja: "自分の番に1回使える。自分の手札が5枚になるように、山札を引く。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "長尾擊碎",
			th: "เทลสแมช",
			ja: "テールスマッシュ"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว",
			ja: "コインを1回投げウラなら、このワザは失敗。"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	dexId: [400]
}

export default card