import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "プラスル"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	dexId: [311],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "電柱から 電気を 吸い取る。 体に ためた 電気を ショートさせて 音を 出す。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ダメージプラス"
		},

		damage: "10＋",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card