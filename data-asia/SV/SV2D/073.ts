import { Card } from "../../../interfaces"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒノヤコマ"
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	dexId: [662],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "虫ポケモンが 潜んでいそうな 草むらに 火の粉を まき散らして 飛び出してきたところを 捕まえる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ヒートダイブ"
		},

		damage: 50,

		effect: {
			ja: "このポケモンにも10ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card