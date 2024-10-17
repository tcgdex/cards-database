import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒンバス"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [349],
	hp: 30,
	types: ["Water"],

	description: {
		ja: "一番 みすぼらしい ポケモン。 水草の 多い 川底で 大勢 集まって 暮らしている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "はねにげ"
		},

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card