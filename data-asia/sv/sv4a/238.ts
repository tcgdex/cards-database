import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ビリリダマ"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	dexId: [100],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "転がって 移動するので 地面が デコボコだと ショックで 爆発してしまう。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "ローリングアタック"
		},

		damage: "10＋",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card