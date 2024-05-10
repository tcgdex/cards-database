import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニャオハ",
		'zh-tw': "新葉喵"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	dexId: [906],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "フワフワの 体毛は 植物に 近い 成分。 こまめに 顔を 洗って 乾燥を 防ぐ。",
		'zh-tw': "毛茸茸的體毛有著近似於植物的成分。 會勤快地洗臉以防止乾燥。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ツメをたてる",
			'zh-tw': "豎爪"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card