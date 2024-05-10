import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "エモンガ",
		'zh-tw': "電飛鼠"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Shimaris Yukichi",
	dexId: [587],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "電気を ほとばしらせながら 空を 舞うように 飛ぶ。 可愛いが やっかいなのだ。",
		'zh-tw': "會一邊放電一邊像是 在空中跳舞般地飛行。 雖然可愛，但很難纏。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "スカイウェーブ",
			'zh-tw': "天空波"
		},

		damage: 10,

		effect: {
			ja: "おたがいのベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "雙方的所有備戰寶可夢也各受到10點傷害。 [在備戰區不計算弱點・抵抗力。]"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card