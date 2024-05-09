import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "コノヨザル"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	dexId: [979],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "心に 秘めた 怒りのパワーを こぶしに 込めて 叩きつけると 相手を 骨の髄から 砕く。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ふんどのこぶし"
		},

		damage: "70×",

		effect: {
			ja: "相手がすでにとったサイドの枚数×70ダメージ。"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "ダイナマイトパンチ"
		},

		damage: 170,

		effect: {
			ja: "このポケモンにも50ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card