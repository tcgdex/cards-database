import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "モウカザル"
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	dexId: [391],
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "尻尾の 炎の 勢いを うまく コントロールして 自分の 得意な 間合いで 戦うのだ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "チョップ"
		},

		damage: 40
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ヒートブロー"
		},

		damage: 80,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card