import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ガブリアスex",
		id: "Garchomp ex",
		th: "กาเบรียสex",
		'zh-tw': "烈咬陸鯊ex",
		'zh-cn': "烈咬陸鯊ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ハイドロランダー",
			id: "Hydro Lander",
			th: "ไฮโดรแลนเดอร์",
			'zh-tw': "水炮著陸",
			'zh-cn': "水炮著陸"
		},

		damage: 160,

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を3枚まで選び、ベンチポケモンに好きなようにつける。",
			id: "Pilih paling banyak 3 lembar Energi Dasar {Petarung} dari Trash sendiri, lalu kenakan sesukanya pada Pokémon Cadangan.",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[ต่อสู้]] ได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์ตามชอบ",
			'zh-tw': "從自己的棄牌區選擇最多3張「基本【鬥】能量」卡，以任意方式附於備戰寶可夢身上。",
			'zh-cn': "從自己的棄牌區選擇最多3張「基本【鬥】能量」卡，以任意方式附於備戰寶可夢身上。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ソニックダイブ",
			id: "Sonic Dive",
			th: "โซนิคไดฟ์",
			'zh-tw': "音波奇襲",
			'zh-cn': "音波奇襲"
		},

		effect: {
			ja: "このポケモンについているエネルギーを2個トラッシュし、相手のポケモン1匹に、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			id: "Buang 2 Energi yang dikenakan pada Pokémon ini ke Trash, serangan ini memberikan kerusakan sejumlah 120 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			th: "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูกที่ตำแหน่งทิ้งการ์ด ทำแดเมจ 120 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'zh-tw': "將2個這隻寶可夢身上附加的能量丟棄，對手的1隻寶可夢受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "將2個這隻寶可夢身上附加的能量丟棄，對手的1隻寶可夢受到120點傷害。[在備戰區不計算弱點・抵抗力。]"
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