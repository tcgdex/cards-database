import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "サケブシッポ",
		id: "Scream Tail",
		th: "หางตะเบ็ง",
		'zh-tw': "吼叫尾",
		'zh-cn': "吼叫尾"
	},

	illustrator: "Ryota Murayama",
	rarity: "None",
	category: "Pokemon",
	dexId: [985],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "目撃例は 過去 １件のみ。 古い 探検記に 記された 謎の 生物に 似た ポケモン。",
		id: "Laporan kesaksian atas Pokémon ini hanya ada 1 di masa lalu. Sosoknya mirip dengan makhluk hidup misterius yang tertera dalam jurnal ekspedisi kuno.",
		th: "ตามข้อมูลระบุว่าเคยมีผู้พบเห็นเพียงแค่ครั้งเดียว เป็นโปเกมอนที่คล้ายกับสิ่งมีชีวิตลึกลับที่ระบุไว้ในบันทึกการสำรวจเก่าแก่",
		'zh-tw': "過去只有過１次目擊紀錄。 是與古老的探險記裡記載的 神秘生物長得很像的寶可夢。",
		'zh-cn': "過去只有過１次目擊紀錄。 是與古老的探險記裡記載的 神秘生物長得很像的寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ビンタ",
			id: "Menampar",
			th: "ตบ",
			'zh-tw': "巴掌",
			'zh-cn': "巴掌"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ほえさけぶ",
			id: "Berteriak Meraung-raung",
			th: "ร้องตะเบ็ง",
			'zh-tw': "大吼大叫",
			'zh-cn': "大吼大叫"
		},

		effect: {
			ja: "相手のポケモン1匹に、このポケモンにのっているダメカンの数×20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			id: "Serangan ini memberikan kerusakan sejumlah 20 kepada 1 Pokémon lawan untuk tiap Token Kerusakan yang dimiliki Pokémon ini. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			th: "ทำแดเมจกับโปเกมอนฝ่ายตรงข้าม 1 ตัว เท่ากับจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x20 {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'zh-tw': "對手的1隻寶可夢受到這隻寶可夢身上放置的傷害指示物的數量×20點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "對手的1隻寶可夢受到這隻寶可夢身上放置的傷害指示物的數量×20點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card