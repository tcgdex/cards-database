import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熾焰咆哮虎",
		'th-th': "กาโอกาเอ็น",
		'ja-jp': "ガオガエン"
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	description: {
		'zh-tw': "當牠燃起鬥志的時候，腰部周圍的火焰也會 燃燒得特別猛烈。",
		'th-th': "เมื่อมีใจสู้ เปลวไฟที่อยู่รอบเอวจะลุกโชติช่วงอย่างเห็นได้ชัด",
		'ja-jp': "闘争心に 火が つくと 腰の まわりに ある 炎も ひと際 激しく 燃えあがる。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "秘技",
			'th-th': "ท่าลับเฉพาะ",
			'ja-jp': "かくしわざ"
		},

		effect: {
			'zh-tw': "選擇這隻寶可夢進化前持有的1個招式，作為這個招式使用。",
			'th-th': "เลือกท่าต่อสู้ที่โปเกมอนนี้มีก่อนวิวัฒนาการ 1 ท่า ใช้เป็นท่าต่อสู้นี้ได้",
			'ja-jp': "このポケモンが進化前に持っていたワザを1つ選び、このワザとして使う。"
		},

		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "閃焰射擊",
			'th-th': "แฟลร์ชูท",
			'ja-jp': "フレアシュート"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄。",
			'th-th': "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมดที่ตำแหน่งทิ้งการ์ด",
			'ja-jp': "このポケモンについているエネルギーを、すべてトラッシュする。"
		},

		damage: 180,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 680156,
				tcgplayer: 570075,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [727],
}

export default card