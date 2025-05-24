import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "力壯雞",
		'zh-cn': "力壯雞",
		ja: "ワカシャモ"
	},

	illustrator: "yuu",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		'zh-tw': "會發出尖銳的叫聲 來提高集中力。 腿技極具破壞力。",
		'zh-cn': "會發出尖銳的叫聲 來提高集中力。 腿技極具破壞力。",
		ja: "鋭い 鳴き声を あげて 集中力を 高める。 足技は 破壊力 抜群。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "烈焰",
			'zh-cn': "烈焰",
			ja: "かえん"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "二連踢",
			'zh-cn': "二連踢",
			ja: "にどげり"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×40點傷害。",
			'zh-cn': "擲2次硬幣，造成正面出現的次數×40點傷害。",
			ja: "コインを2回投げ、オモテの数×40ダメージ。"
		},

		damage: "40×",
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [256]
}

export default card