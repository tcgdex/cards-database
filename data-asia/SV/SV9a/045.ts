import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ドロバンコ",
		'zh-tw': "泥驢仔",
		'zh-cn': "泥驢仔"
	},

	illustrator: "Aliya Chen",
	rarity: "Common",
	category: "Pokemon",
	dexId: [749],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "まとっている 泥は 食べた 土を 反芻したもの。 長時間 日差しを 浴びても 乾かないのだ。",
		'zh-tw': "裹在身上的泥巴是吃下的土 反芻而成的。就算長時間 曝曬在陽光下也不會乾掉。",
		'zh-cn': "裹在身上的泥巴是吃下的土 反芻而成的。就算長時間 曝曬在陽光下也不會乾掉。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "つっぱしる",
			'zh-tw': "奔進",
			'zh-cn': "奔進"
		},

		damage: "40×",

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×40ダメージ。",
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×40點傷害。",
			'zh-cn': "擲硬幣直到出現反面，造成正面出現的次數×40點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card