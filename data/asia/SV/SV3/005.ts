import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ツボツボ",
		'zh-tw': "壺壺",
		'th-th': "สึโบสึโบะ"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [213],
	hp: 80,
	types: ["Grass"],

	description: {
		'ja-jp': "ツボのような 甲羅の 中に ためこんだ 木の実は いつの間にか ドロドロの ジュースに 変わる。",
		'zh-tw': "儲存在壺形甲殼裡的樹果會在不知不覺間變成黏糊糊的果汁。",
		'th-th': "ผลไม้ที่เก็บสะสมไว้ในกระดองลักษณะคล้ายไห กลายเป็นน้ำคั้นผสมเนื้อตั้งแต่เมื่อไรก็ไม่รู้"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "きのみのかおり",
			'zh-tw': "樹果香氣",
			'th-th': "กลิ่นหอมของผลไม้"
		},

		effect: {
			'ja-jp': "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			'th-th': "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "ガードプレス",
			'zh-tw': "防守壓制",
			'th-th': "การ์ดเพรส"
		},

		damage: 30,

		effect: {
			'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			'th-th': "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 723917,
				tcgplayer: 566959,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card