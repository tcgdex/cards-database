import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "コロモリ",
		'zh-tw': "滾滾蝙蝠",
		'th-th': "โคโรโมริ",
		'ko-kr': "또르박쥐"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [527],
	hp: 60,
	types: ["Psychic"],

	description: {
		'ja-jp': "超音波を 放ちながら フラフラと 飛びまわり エサの 虫ポケモンを 探している。",
		'zh-tw': "一邊發出超音波，一邊飛來飛去尋找蟲寶可夢 來填飽自己的肚子。",
		'th-th': "กระพือปีกบินไปพร้อมกับปล่อยคลื่นความถี่สูงเพื่อหาโปเกมอนแมลงที่เป็นเหยื่อของมัน",
		'ko-kr': "초음파를 발산하면서 흔들흔들 날아다닌다. 먹이인 벌레포켓몬을 찾고 있다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'ja-jp': "とつげき",
			'zh-tw': "突擊",
			'th-th': "ประจัญบาน",
			'ko-kr': "돌격"
		},

		damage: 30,

		effect: {
			'ja-jp': "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			'ko-kr': "이 포켓몬에게도 10데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 741344,
				tcgplayer: 565783,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card