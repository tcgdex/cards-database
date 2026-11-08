import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "エイパム",
		'th-th': "เอย์แพม",
		'ko-kr': "에이팜"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	dexId: [190],
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "木の 上から 獲物が いないか 探す。 好物の アマカジを 見ると 興奮して 飛びかかるぞ。",
		'th-th': "จะคอยมองหาเหยื่อจากบนต้นไม้ พอเจออมาคาจิที่เป็นของโปรด จะตื่นเต้นจนกระโดดเข้าใส่",
		'ko-kr': "나무 위에서 먹이를 찾는다. 좋아하는 달콤아를 발견하면 흥분해서 덤벼든다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "くすねる",
			'th-th': "ฉกฉวย",
			'ko-kr': "슬쩍 훔치기"
		},

		effect: {
			'ja-jp': "自分の山札を1枚引く。",
			'th-th': "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา",
			'ko-kr': "자신의 덱을 1장 뽑는다."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "ひらてうち",
			'th-th': "ฝ่ามือตบ",
			'ko-kr': "수벽치기"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 741902,
				tcgplayer: 566035,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card