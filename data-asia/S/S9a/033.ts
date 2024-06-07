import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "奇魯莉安",
		ja: "キルリア"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "當訓練家高興的時候，奇魯莉安會充滿能量， 開心地轉著圈跳舞。",
		ja: "トレーナーが 喜ぶと キルリアに エネルギーが 満ちあふれ 楽しそうに くるくると 踊る。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "瞬間移動突擊",
			ja: "テレポートブレイク"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			ja: "このポケモンをベンチポケモンと入れ替える。"
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [281]
}

export default card