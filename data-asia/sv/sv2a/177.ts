import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴーリキー"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	dexId: [67],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "疲れることのない 強靭な 肉体を もつ。 重い 荷物の 運搬などの 仕事を 手伝う。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "やまどつき"
		},

		damage: 50,

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card