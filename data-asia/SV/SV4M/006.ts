import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ノノクラゲ",
		'zh-tw': "原野水母",
		th: "โนโนะคุราเกะ",
		ko: "들눈해"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	dexId: [948],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "メノクラゲに 似ているが まったく 別の 種類。 脚は 細いが 走りだせば 時速５０キロになる。",
		'zh-tw': "看起來像瑪瑙水母，其實是截然不同的種類。雖然腳很細，但跑起來能達到時速５０公里。",
		th: "มีความคล้ายคลึงกับเมโนคุราเกะแต่ความจริงแล้วเป็นสายพันธุ์ที่ต่างกันโดยสิ้นเชิง แม้จะมีขาเรียวเล็กแต่เมื่อออกวิ่งจะมีความเร็วอยู่ที่ 50 กิโลเมตรต่อชั่วโมง",
		ko: "왕눈해를 닮았지만 전혀 다른 종류다. 다리는 가늘지만 달리기 시작하면 시속 50km에 이르게 된다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "くっつくほうし",
			'zh-tw': "附著孢子",
			th: "สปอร์ติดหนึบ",
			ko: "들러붙는포자"
		},

		effect: {
			ja: "自分の手札から「基本エネルギー」を1枚選び、ベンチポケモンにつける。",
			'zh-tw': "從自己的手牌選擇1張「基本【草】能量」卡，附於備戰寶可夢身上。",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[หญ้า]] 1 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนบนเบนช์",
			ko: "자신의 패에서 「기본 (풀) 에너지」를 1장 선택해서 벤치 포켓몬에게 붙인다."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "つるでうつ",
			'zh-tw': "藤蔓攻擊",
			th: "โจมตีด้วยเถาวัลย์",
			ko: "덩굴치기"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card