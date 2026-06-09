import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒトカゲ",
		'zh-tw': "小火龍",
		th: "ฮิโตคาเงะ"
	},

	illustrator: "DOM",
	rarity: "Common",
	category: "Pokemon",
	dexId: [4],
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "生まれたときから しっぽに 炎が ともっている。 炎が 消えたとき その 命は 終わって しまう。",
		'zh-tw': "從出生時開始尾巴上就有火焰在燃燒。火焰熄滅時，生命也會結束。",
		th: "มีหางที่ติดไฟตั้งแต่เกิด หากไฟดับนั่นหมายถึงการจบชีวิต"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ヒートタックル",
			'zh-tw': "熱力衝撞",
			th: "ฮีทแท็กเกิล"
		},

		damage: 30,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 723930
	}
}

export default card