import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ガブリアスex",
		'zh-tw': "烈咬陸鯊ex",
		th: "กาเบรียสex"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ハイドロランダー",
			'zh-tw': "水炮著陸",
			th: "ไฮโดรแลนเดอร์"
		},

		damage: 160,

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を3枚まで選び、ベンチポケモンに好きなようにつける。",
			'zh-tw': "從自己的棄牌區選擇最多3張「基本【鬥】能量」卡，以任意方式附於備戰寶可夢身上。",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[ต่อสู้]] ได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์ตามชอบ"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ソニックダイブ",
			'zh-tw': "音波奇襲",
			th: "โซนิคไดฟ์"
		},

		effect: {
			ja: "このポケモンについているエネルギーを2個トラッシュし、相手のポケモン1匹に、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "將2個這隻寶可夢身上附加的能量丟棄，對手的1隻寶可夢受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูกที่ตำแหน่งทิ้งการ์ด ทำแดเมจ 120 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card