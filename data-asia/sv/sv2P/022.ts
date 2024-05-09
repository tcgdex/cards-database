import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ハルクジラ"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [975],
	hp: 180,
	types: ["Water"],

	description: {
		ja: "氷雪地帯を 回遊する。 強靭な 筋肉と ぶ厚い 皮下脂肪で 体を 守る。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "つららミサイル"
		},

		damage: 50
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "スペシャルホーン"
		},

		damage: "80＋",

		effect: {
			ja: "このポケモンに特殊エネルギーがついているなら、140ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3
}

export default card