import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ジュゴン",
		'zh-tw': "白海獅"
	},

	illustrator: "aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [87],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "食事の 後は 砂浜で 日光浴を している。 体温を あげて 消化を よく するのだ。",
		'zh-tw': "進食之後會在沙灘上 做日光浴，藉此提高體溫 來幫助消化。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "デュアルスプラッシュ",
			'zh-tw': "二重飛濺"
		},

		effect: {
			ja: "相手のポケモン2匹に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的2隻寶可夢各受到50點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "オーロラビーム",
			'zh-tw': "極光束"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card