import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アルクジラ",
		'zh-tw': "走鯨"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	dexId: [974],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "遥か 昔に 海から 上がって 陸地で 暮らすようになった。 ホエルコに 近い 種類らしい。",
		'zh-tw': "遠古時代自大海上岸後，就開始在陸地上生活。 似乎與吼吼鯨是相近的物種。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "ゆきなだれ",
			'zh-tw': "雪崩"
		},

		damage: 30,

		effect: {
			ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的所有備戰寶可夢也各受到10點傷害。 [在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card