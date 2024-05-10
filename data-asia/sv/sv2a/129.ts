import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "コイキング",
		'zh-tw': "鯉魚王"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [129],
	hp: 30,
	types: ["Water"],

	description: {
		ja: "力のない 情けない ポケモン。 たまに 高く 飛び跳ねても ２メートルを 超すのが やっとだ。",
		'zh-tw': "沒力量的可憐寶可夢。偶爾跳得比較高時， 也只是勉強高過2公尺而已。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "はねにはねる",
			'zh-tw': "跳了又跳"
		},

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数ぶん、自分の山札を引く。",
			'zh-tw': "擲硬幣直到出現反面，從自己的牌庫抽出與正面出現的次數相同數量的卡。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card