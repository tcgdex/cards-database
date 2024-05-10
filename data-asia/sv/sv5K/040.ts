import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "トロッゴン",
		'zh-tw': "大炭車",
		th: "โทร็อกกอน",
		'zh-cn': "大炭車"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	dexId: [838],
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "感情が 昂ると 体内の 温度が 上昇。 炎を 吹きながら 忙しなく 走る。",
		'zh-tw': "情緒只要激昂起來，體內的溫度就會上升。 會噴著火焰忙碌地奔跑。",
		th: "พอตื่นเต้น อุณหภูมิภายในร่างกายจะสูงขึ้น แล้ววิ่งไปมาอย่างอยู่ไม่สุขพร้อมพ่นไฟ",
		'zh-cn': "情緒只要激昂起來，體內的溫度就會上升。 會噴著火焰忙碌地奔跑。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "はねとばす",
			'zh-tw': "擊飛",
			th: "ตบกระเด็น",
			'zh-cn': "擊飛"
		},

		damage: "20+",

		effect: {
			ja: "コインを1回投げオモテなら、40ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加40點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 40",
			'zh-cn': "擲1次硬幣若為正面，則增加40點傷害。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ロックスマッシュ",
			'zh-tw': "岩石粉碎",
			th: "ร็อกสแมช",
			'zh-cn': "岩石粉碎"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card