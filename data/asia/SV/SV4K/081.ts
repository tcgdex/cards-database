import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "グソクムシャex",
		'th-th': "กูโซคูมูฉะex",
		'ko-kr': "갑주무사 ex"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "アクアブレード",
			'th-th': "อควาเบลด",
			'ko-kr': "아쿠아 블레이드"
		},

		damage: 70
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'ja-jp': "いっとうりだつ",
			'th-th': "หนึ่งดาบถอยทัพ",
			'ko-kr': "일도이탈"
		},

		damage: 170,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。その後、このポケモンをベンチポケモンと入れ替える。",
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด หลังจากนั้น สลับโปเกมอนนี้กับโปเกมอนบนเบนช์"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 741498,
				tcgplayer: 565836,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
}

export default card