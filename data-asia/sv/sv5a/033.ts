import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノイバラex",
		'zh-tw': "鐵荊棘ex",
		th: "หนามเหล็กex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "イニシャライズ",
			'zh-tw': "初始化",
			th: "อินิเชียไลซ์"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、おたがいの場の「ルールを持つポケモン」（「未来」のポケモンをのぞく）の特性は、すべてなくなる。",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，雙方場上「擁有規則的寶可夢」（「未來」寶可夢除外）的特性全部消除。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ ความสามารถของ [โปเกมอนที่มีกฎ] บนกระดานของทั้งสองฝ่าย (ยกเว้นโปเกมอน [อนาคต]) ทั้งหมดจะหายไป"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "ボルトサイクロン",
			'zh-tw': "伏特旋風",
			th: "โวลต์ไซโคลน"
		},

		damage: 140,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card