import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爆炸頭水牛"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "會組成約２０隻的群體一起生活。不知為何，背叛了群體的 爆炸頭水牛頭上的毛會脫落。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "爆炸頭防守"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到招式的傷害「-20」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "傷害衝刺"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，增加正面出現的次數×30點傷害。"
		},

		damage: "50+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card