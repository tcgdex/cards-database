import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨石丁",
		'th-th': "อิชิเฮนจิน",
		'ja-jp': "イシヘンジン"
	},

	illustrator: "Hataya",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "佇立在大草原上，每天眺望著日升日落。 擅長強而有力的踢技。",
		'th-th': "ใช้ชีวิตด้วยการยืนในทุ่งหญ้ากว้างใหญ่ มองตะวันคล้อย ถนัดท่าต่อสู้เตะที่รุนแรง",
		'ja-jp': "大草原の 中で たたずみ 陽の 傾きを 眺めて 暮らす。 ダイナミックな 蹴り技が 得意。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "落石",
			'th-th': "หินผาถล่ม",
			'ja-jp': "いわおとし"
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "神秘壓制",
			'th-th': "มิสเทรีเพรส",
			'ja-jp': "ミステリープレス"
		},

		effect: {
			'zh-tw': "若自己的棄牌區1張支援者卡都沒有，則增加130點傷害。",
			'th-th': "ถ้าบนตำแหน่งทิ้งการ์ดฝ่ายเราไม่มีการ์ดซัพพอร์ตเลยแม้แต่ 1 ใบ การโจมตีนี้จะเพิ่มแดเมจอีก 130",
			'ja-jp': "自分のトラッシュにサポートが1枚もないなら、130ダメージ追加。"
		},

		damage: "60＋",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 680194,
				tcgplayer: 570113,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [874]
}

export default card