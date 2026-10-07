import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [800],
	rarity: "Double rare",
	set: Set,

	name: {
		ja: "ネクロズマV",
		'zh-tw': "奈克洛茲瑪V",
		th: "เนครอสมาV"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			ja: "プリズムレイ",
			'zh-tw': "稜鏡之光",
			th: "ปริซึมเรย์"
		},

		effect: {
			ja: "相手のベンチポケモン2匹にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的2隻備戰寶可夢也各受到20點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 2 ตัว ก็จะได้รับแดเมจตัวละ 20 ด้วย [โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด]"
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			ja: "スペシャルレーザー",
			'zh-tw': "特殊鐳射",
			th: "สเปเชียลเลเซอร์"
		},

		effect: {
			ja: "このポケモンに特殊エネルギーがついているなら、120ダメージ追加。",
			'zh-tw': "若這隻寶可夢身上附有特殊能量，則增加120點傷害。",
			th: "ถ้าโปเกมอนนี้มีพลังงานพิเศษติดอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 120"
		},

		damage: "100+",
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 533752, tcgplayer: 569077, cardtrader: 240042 } }
	]
}

export default card