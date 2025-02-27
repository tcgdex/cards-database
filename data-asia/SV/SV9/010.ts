import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ニャオハ",
		'zh-tw': "新葉喵",
		'zh-cn': "新葉喵"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [906],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "フワフワの 体毛は 植物に 近い 成分。 こまめに 顔を 洗って 乾燥を 防ぐ。",
		'zh-tw': "毛茸茸的體毛有著 近似於植物的成分。 會勤快地洗臉以防止乾燥。",
		'zh-cn': "毛茸茸的體毛有著 近似於植物的成分。 會勤快地洗臉以防止乾燥。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ふみまくる",
			'zh-tw': "狂踩",
			'zh-cn': "狂踩"
		},

		damage: "10×",

		effect: {
			ja: "コインを3回投げ、オモテの数×10ダメージ。",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。",
			'zh-cn': "擲3次硬幣，造成正面出現的次數×10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card