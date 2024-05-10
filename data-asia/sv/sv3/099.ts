import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "カラミンゴ",
		'zh-tw': "纏紅鶴",
		th: "คลามิงโก้"
	},

	illustrator: "Hiroki Asanuma",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [973],
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "お腹に 溜めた エネルギーが くちばしから 漏れないように 首を 根元で 結んでいるらしい。",
		'zh-tw': "為了避免積蓄在肚子裡的能量外流，似乎會把自己的脖子繫在頸根部上。",
		th: "ดูเหมือนว่าจะผูกคอไว้ที่ต้นคอเพื่อไม่ให้พลังงานที่เก็บสะสมไว้ในท้องรั่วไหลออกจากจะงอยปาก"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "つつく",
			'zh-tw': "啄",
			th: "จิก"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "シンクロフェザー",
			'zh-tw': "同步羽毛",
			th: "ซิงโครฟีเธอร์"
		},

		damage: 60,

		effect: {
			ja: "自分のベンチに「カラミンゴ」がいるなら、相手のベンチポケモン1匹にも、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "若自己的備戰區有「纏紅鶴」，則對手的1隻備戰寶可夢也受到60點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ถ้าบนเบนช์ฝ่ายเรามี [คลามิงโก้] อยู่ โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 60 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card