import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデア ケンタロス"
	},

	illustrator: "toi8",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [128],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "ツノから 水を 吹きだし 泳ぐ。 脂肪分が 多く 浮きやすいのが ウォーター種の 特徴。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かちあげホーン"
		},

		damage: 30,

		effect: {
			ja: "のぞむなら、相手のバトル場の2進化ポケモンについているエネルギーを2個選び、相手の手札にもどす。"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "ジェットヘッド"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card