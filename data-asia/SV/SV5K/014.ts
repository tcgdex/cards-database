import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "アリゲイツ",
		'zh-tw': "藍鱷",
		th: "อัลลิเกต",
		ko: "엘리게이"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [159],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "キバは 抜けても 次から 次に 生えてくる。いつも 口の中には ４８本の キバが そろっている。",
		'zh-tw': "即使牙齒掉了也會不斷重新長出來。 嘴裡總是長滿著４８顆牙齒。",
		th: "แม้เขี้ยวจะหลุดไป ก็จะงอกขึ้นมาใหม่เรื่อย ๆ ในปากจึงมีเขี้ยวครบ 48 ซี่เสมอ",
		ko: "이빨이 빠져도 계속해서 자란다. 항상 입안에는 48개의 이빨이 나 있다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ぎゃくふんしゃ",
			'zh-tw': "逆向噴射",
			th: "พ่นน้ำสวนทาง",
			ko: "역분사"
		},

		damage: 30,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			th: "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์",
			ko: "이 포켓몬을 벤치 포켓몬과 교체한다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 752768
	}
}

export default card