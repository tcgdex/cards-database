import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "コジオ",
		'zh-tw': "鹽石寶",
		'th-th': "โคจีโอ",
		'ko-kr': "베베솔트"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [932],
	hp: 60,
	types: ["Fighting"],

	description: {
		'ja-jp': "地底の 岩塩層で 生まれた。 貴重な 塩を 分けてくれるため 昔は とくに 大事にされた。",
		'zh-tw': "出生在地底的岩鹽層。會願意分享貴重的鹽巴， 因此在過去更是受到重視。",
		'th-th': "เกิดในชั้นหินเกลือใต้ดิน ในสมัยก่อนมีผู้ให้ความสำคัญกับมันเป็นอย่างมากเพราะมันแบ่งปันเกลือที่แสนล้ำค่าให้",
		'ko-kr': "땅속의 암염층에서 태어났다. 귀한 소금을 나눠 주기 때문에 옛날에는 특히 더 귀하게 여겨졌다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "いわおとし",
			'zh-tw': "落石",
			'th-th': "หินผาถล่ม",
			'ko-kr': "돌떨구기"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'ja-jp': "ストーンエッジ",
			'zh-tw': "尖石攻擊",
			'th-th': "ศิลาพิฆาต",
			'ko-kr': "스톤에지"
		},

		damage: "20+",

		effect: {
			'ja-jp': "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 20"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 741377,
				tcgplayer: 565792,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card