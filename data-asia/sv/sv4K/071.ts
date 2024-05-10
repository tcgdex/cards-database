import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "サケブシッポ",
		th: "หางตะเบ็ง"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	dexId: [985],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "目撃例は 過去 １件のみ。 古い 探検記に 記された 謎の 生物に 似た ポケモン。",
		th: "ตามข้อมูลระบุว่าเคยมีผู้พบเห็นเพียงแค่ครั้งเดียว เป็นโปเกมอนที่คล้ายกับสิ่งมีชีวิตลึกลับที่ระบุไว้ในบันทึกการสำรวจเก่าแก่"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ビンタ",
			th: "ตบ"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ほえさけぶ",
			th: "ร้องตะเบ็ง"
		},

		effect: {
			ja: "相手のポケモン1匹に、このポケモンにのっているダメカンの数×20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
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