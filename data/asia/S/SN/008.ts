import { Card } from "../../../interfaces"
import Set from "../SN"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡比獸",
		ja: "カビゴン"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],

	description: {
		'zh-tw': "擁有一個結實的胃，即使吃了發霉腐爛的東西， 也完全不會吃壞肚子。",
		ja: "頑丈な 胃袋は カビの 生えたものや 腐ったものを 食べても 壊れることはない。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "重磅衝擊",
			ja: "ヘビーインパクト"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",
	dexId: [143]
}

export default card