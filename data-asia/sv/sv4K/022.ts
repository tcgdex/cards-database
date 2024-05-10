import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "グソクムシャex",
		'zh-tw': "具甲武者ex",
		th: "กูโซคูมูฉะex"
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
			ja: "アクアブレード",
			'zh-tw': "水之利刃",
			th: "อควาเบลด"
		},

		damage: 70
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "いっとうりだつ",
			'zh-tw': "一刀立斷",
			th: "หนึ่งดาบถอยทัพ"
		},

		damage: 170,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。その後、このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。然後，將這隻寶可夢與備戰寶可夢互換。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด หลังจากนั้น สลับโปเกมอนนี้กับโปเกมอนบนเบนช์"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card