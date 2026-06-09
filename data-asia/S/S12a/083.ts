import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿勃梭魯",
		th: "แอบโซล",
		ja: "アブソル"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'zh-tw': "如風般地奔馳在山野中。形狀如弓的角能夠敏銳 感應到自然災害的預兆。",
		th: "วิ่งผ่านทุ่งหญ้าป่าเขาราวกับสายลม เขาทรงคันธนูนั้นไวต่อการรับรู้ถึงลางร้ายแห่งภัยธรรมชาติ",
		ja: "風のように 野山を 駆けぬける。 弓なりの ツノは 自然災害の 予兆を 敏感に 感じとる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "漩渦災禍",
			th: "หายนะหมุนวน",
			ja: "うずまくわざわい"
		},

		effect: {
			'zh-tw': "對手的所有寶可夢各受到10點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนฝ่ายตรงข้ามทุกตัว จะได้รับแดเมจตัวละ 10 {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			ja: "相手のポケモン全員に、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "抓裂",
			th: "กรงเล็บขย้ำ",
			ja: "ツメでえぐる"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加70點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 70",
			ja: "相手のバトルポケモンにダメカンがのっているなら、70ダメージ追加。"
		},

		damage: "50＋",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [359],

	thirdParty: {
		cardmarket: 687645
	}
}

export default card