import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "クサイハナ",
		'zh-tw': "臭臭花",
		'th-th': "คุไซฮานะ"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	dexId: [44],
	hp: 80,
	types: ["Grass"],

	description: {
		'ja-jp': "よだれのように 見える 甘い蜜。 とても ねばねば しており 触れると いつまでも まとわりつく。",
		'zh-tw': "看似口水的東西其實是甜甜的蜜。非常黏稠， 只要碰到就會一直黏住。",
		'th-th': "น้ำหวาน ๆ ของดอกไม้ที่ดูเหมือนน้ำลายหยดนั้น เหนียวหนืดมาก ถ้าไปโดนเข้าล่ะก็จะติดไปตลอดเลย"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "さそうかおり",
			'zh-tw': "誘導香氣",
			'th-th': "กลิ่นหอมเชื้อเชิญ"
		},

		effect: {
			'ja-jp': "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
			'th-th': "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้"
		}
	}, {
		cost: ["Grass"],

		name: {
			'ja-jp': "リーフステップ",
			'zh-tw': "綠葉舞步",
			'th-th': "ลีฟสเต็ป"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 724965,
				tcgplayer: 567063,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
}

export default card