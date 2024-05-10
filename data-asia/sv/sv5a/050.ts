import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "イーブイ",
		'zh-tw': "伊布",
		th: "อีวุย"
	},

	illustrator: "satoma",
	rarity: "Common",
	category: "Pokemon",
	dexId: [133],
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "不規則な 遺伝子を 持つ。 石から出る 放射線によって 体が 突然変異を 起こす。",
		'zh-tw': "有著不規則的基因。 石頭散發出的放射線， 會使牠的身體發生突變。",
		th: "มีหน่วยพันธุกรรมที่ผิดปกติ รังสีจากหินทำให้ร่างกายกลายพันธุ์อย่างฉับพลัน"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かくせい",
			'zh-tw': "覺醒",
			th: "ปลุกพลัง"
		},

		effect: {
			ja: "このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張從這隻寶可夢進化而來的卡，放置於這隻寶可夢身上完成進化。並且重洗牌庫。",
			th: "เลือกการ์ดที่จะวิวัฒนาการจากโปเกมอนนี้ 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนโปเกมอนนี้เพื่อวิวัฒนาการ แล้วสับสำรับการ์ด"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "でんこうせっか",
			'zh-tw': "電光一閃",
			th: "เคลื่อนที่ความไวแสง"
		},

		damage: "20+",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card