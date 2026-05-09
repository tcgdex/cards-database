import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "チヲハウハネ",
		th: "ปีกไล้พสุธา",
		ko: "땅을기는날개"
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	dexId: [988],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "古い 本で チヲハウハネと 紹介されている 生物に 似た点が ある 謎のポケモン。",
		th: "โปเกมอนปริศนาที่มีบางจุดคล้ายคลึงกับสิ่งมีชีวิตที่ถูกเรียกว่าปีกไล้พสุธาในหนังสือเก่าแก่เล่มหนึ่ง",
		ko: "오래된 책에 \"땅을기는날개\"라는 이름으로 소개된 생물과 닮은 점이 있는 정체불명의 포켓몬."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ふみならす",
			th: "กระทืบ",
			ko: "쿵쿵거리기"
		},

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。",
			th: "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			ko: "상대의 덱을 위에서부터 1장 트래쉬한다."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "ねっしょうどとう",
			th: "แผลไหม้โหมกระหน่ำ",
			ko: "열상노도"
		},

		damage: 120,

		effect: {
			ja: "このポケモンにも90ダメージ。相手のバトルポケモンをやけどにする。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 90 ด้วย ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
			ko: "이 포켓몬에게도 90데미지를 준다. 상대의 배틀 포켓몬을 화상으로 만든다."
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