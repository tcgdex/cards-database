import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "サケブシッポ",
		'zh-tw': "吼叫尾",
		th: "หางตะเบ็ง",
		ko: "우렁찬꼬리"
	},

	illustrator: "Ryota Murayama",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [985],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "目撃例は 過去 １件のみ。 古い 探検記に 記された 謎の 生物に 似た ポケモン。",
		'zh-tw': "過去只有過１次目擊紀錄。是與古老的探險記裡記載的 神秘生物長得很像的寶可夢。",
		th: "ตามข้อมูลระบุว่าเคยมีผู้พบเห็นเพียงแค่ครั้งเดียว เป็นโปเกมอนที่คล้ายกับสิ่งมีชีวิตลึกลับที่ระบุไว้ในบันทึกการสำรวจเก่าแก่",
		ko: "목격된 사례는 과거에 단 1건뿐이다. 오래된 탐험기에 기록된 정체불명의 생물을 닮은 포켓몬."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ビンタ",
			'zh-tw': "巴掌",
			th: "ตบ",
			ko: "뺨치기"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ほえさけぶ",
			'zh-tw': "大吼大叫",
			th: "ร้องตะเบ็ง",
			ko: "우렁찬 울부짖음"
		},

		effect: {
			ja: "相手のポケモン1匹に、このポケモンにのっているダメカンの数×20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻寶可夢受到這隻寶可夢身上放置的傷害指示物的數量×20點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทำแดเมจกับโปเกมอนฝ่ายตรงข้าม 1 ตัว เท่ากับจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x20 {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
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