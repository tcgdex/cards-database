import { Card } from "../../../interfaces"
import Set from "../S6K"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷電斑馬"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "有著閃電般的爆發力。如果雷電斑馬全速奔馳，雷聲就會響徹雲霄。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "聯合伏特"
		},

		effect: {
			'zh-tw': "在上個自己的回合，若這隻寶可夢以外的「連擊」寶可夢使用了招式，則增加90點傷害。"
		},

		damage: "30+",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "電光衝刺"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×90點傷害。"
		},

		damage: "90×",
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card