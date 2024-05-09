import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "アリゲイツ"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [159],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "キバは 抜けても 次から 次に 生えてくる。いつも 口の中には ４８本の キバが そろっている。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ぎゃくふんしゃ"
		},

		damage: 30,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card