import { Card } from "models/database/card"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ノノクラゲ",
		'zh-tw': "原野水母",
		'th-th': "โนโนะคุราเกะ",
		'ko-kr': "들눈해"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Common",
	category: "Pokemon",
	dexId: [948],
	hp: 60,
	types: ["Grass"],

	description: {
		'ja-jp': "メノクラゲに 似ているが まったく 別の 種類。 脚は 細いが 走りだせば 時速５０キロになる。",
		'zh-tw': "看起來像瑪瑙水母，其實是截然不同的種類。雖然腳很細，但跑起來能達到時速５０公里。",
		'th-th': "มีความคล้ายคลึงกับเมโนคุราเกะแต่ความจริงแล้วเป็นสายพันธุ์ที่ต่างกันโดยสิ้นเชิง แม้จะมีขาเรียวเล็กแต่เมื่อออกวิ่งจะมีความเร็วอยู่ที่ 50 กิโลเมตรต่อชั่วโมง",
		'ko-kr': "왕눈해를 닮았지만 전혀 다른 종류다. 다리는 가늘지만 달리기 시작하면 시속 50km에 이르게 된다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "キック",
			'zh-tw': "踢",
			'th-th': "เตะ",
			'ko-kr': "킥"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'ja-jp': "すいとる",
			'zh-tw': "吸取",
			'th-th': "ดูดซับ",
			'ko-kr': "흡수"
		},

		damage: 40,

		effect: {
			'ja-jp': "このポケモンのHPを「20」回復する。",
			'zh-tw': "將這隻寶可夢恢復「20」HP。",
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ [20]"
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
				cardmarket: 741827,
				tcgplayer: 565967,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card