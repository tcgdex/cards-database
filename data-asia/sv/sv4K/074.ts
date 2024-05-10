import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "チヲハウハネ",
		th: "ปีกไล้พสุธา"
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	dexId: [988],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "古い 本で チヲハウハネと 紹介されている 生物に 似た点が ある 謎のポケモン。",
		th: "โปเกมอนปริศนาที่มีบางจุดคล้ายคลึงกับสิ่งมีชีวิตที่ถูกเรียกว่าปีกไล้พสุธาในหนังสือเก่าแก่เล่มหนึ่ง"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ふみならす",
			th: "กระทืบ"
		},

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。",
			th: "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "ねっしょうどとう",
			th: "แผลไหม้โหมกระหน่ำ"
		},

		damage: 120,

		effect: {
			ja: "このポケモンにも90ダメージ。相手のバトルポケモンをやけどにする。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 90 ด้วย ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card