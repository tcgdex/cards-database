import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "グソクムシャex",
		th: "กูโซคูมูฉะex",
		ko: "갑주무사 ex"
	},

	illustrator: "Oku",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "アクアブレード",
			th: "อควาเบลด",
			ko: "아쿠아 블레이드"
		},

		damage: 70
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "いっとうりだつ",
			th: "หนึ่งดาบถอยทัพ",
			ko: "일도이탈"
		},

		damage: 170,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。その後、このポケモンをベンチポケモンと入れ替える。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด หลังจากนั้น สลับโปเกมอนนี้กับโปเกมอนบนเบนช์"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 741325
	}
}

export default card