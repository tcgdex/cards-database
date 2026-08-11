import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "グソクムシャex",
		'zh-tw': "具甲武者ex",
		'th-th': "กูโซคูมูฉะex",
		'ko-kr': "갑주무사 ex"
	},

	illustrator: "N-DESIGN Inc.",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "アクアブレード",
			'zh-tw': "水之利刃",
			'th-th': "อควาเบลด",
			'ko-kr': "아쿠아 블레이드"
		},

		damage: 70
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'ja-jp': "いっとうりだつ",
			'zh-tw': "一刀立斷",
			'th-th': "หนึ่งดาบถอยทัพ",
			'ko-kr': "일도이탈"
		},

		damage: 170,

		effect: {
			'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。その後、このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。然後，將這隻寶可夢與備戰寶可夢互換。",
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
				cardmarket: 741325,
				tcgplayer: 565777,
			},
		},
	],

	retreat: 3,
	regulationMark: "G",
}

export default card